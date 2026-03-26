import { HarmonyClassId, HarmonyVariantId, PaletteSize, SemanticRole, OutputPaletteItem, HarmonyInput, HarmonyOutput } from './harmonyTypes';
import { HARMONY_CATALOG } from './harmonyCatalog';
import { hexToRgb, rgbToHsl, hslToRgb, rgbToHex } from '../utils/color';
import { getContrastRatio } from '../utils/contrast';
import { generateId } from '../utils/ids';

// --- Core Math Helpers ---

/**
 * Ensures a hue value is always between 0 and 360.
 */
function normalizeHue(h: number): number {
  return ((h % 360) + 360) % 360;
}

/**
 * Clamps a value between a min and max.
 */
function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

// --- Variant Modifiers ---

interface VariantModifiers {
  sMult: number; // Saturation multiplier
  sAdd: number;  // Saturation addition
  lMult: number; // Lightness multiplier
  lAdd: number;  // Lightness addition
}

function getVariantModifiers(variant: HarmonyVariantId): VariantModifiers {
  switch (variant) {
    case 'soft':
    case 'calm':
    case 'subtle':
    case 'muted':
      return { sMult: 0.7, sAdd: -10, lMult: 1, lAdd: 10 };
    case 'vivid':
    case 'active':
    case 'bold':
    case 'energetic':
    case 'rich':
      return { sMult: 1.2, sAdd: 10, lMult: 1, lAdd: 0 };
    case 'minimal':
    case 'desaturated':
      return { sMult: 0.3, sAdd: -30, lMult: 1, lAdd: 0 };
    case 'high-contrast':
    case 'high-range':
      return { sMult: 1, sAdd: 0, lMult: 1.2, lAdd: 0 }; // We'll handle lightness spread separately
    case 'standard':
    case 'balanced':
    default:
      return { sMult: 1, sAdd: 0, lMult: 1, lAdd: 0 };
  }
}

function applyVariant(hsl: [number, number, number], variant: HarmonyVariantId): [number, number, number] {
  const mods = getVariantModifiers(variant);
  const s = clamp(hsl[1] * mods.sMult + mods.sAdd, 0, 100);
  const l = clamp(hsl[2] * mods.lMult + mods.lAdd, 0, 100);
  return [hsl[0], s, l];
}

// --- Role Assignment Strategy ---

/**
 * Determines the best roles for a given set of HSL colors based on the requested size.
 * This is a simplified heuristic. A real system might have specific role maps per class.
 */
function assignRoles(hslColors: [number, number, number][], size: PaletteSize): { role: SemanticRole; hsl: [number, number, number] }[] {
  const items: { role: SemanticRole; hsl: [number, number, number] }[] = [];
  
  // 1. Base is always the first color
  items.push({ role: 'base', hsl: hslColors[0] });

  // 2. Determine Primary/Secondary/Accent based on available colors
  if (hslColors.length > 1) items.push({ role: 'primary', hsl: hslColors[1] });
  if (hslColors.length > 2) items.push({ role: 'secondary', hsl: hslColors[2] });
  if (hslColors.length > 3) items.push({ role: 'accent', hsl: hslColors[3] });
  if (hslColors.length > 4) items.push({ role: 'accent-2', hsl: hslColors[4] });

  // 3. Generate UI colors (Background, Surface, Text, Muted, Border)
  // We derive these from the base color to ensure they match the theme.
  const baseHsl = hslColors[0];
  const isLightMode = baseHsl[2] > 50; // Simple heuristic for dark/light mode

  // Background
  items.push({
    role: 'background',
    hsl: [baseHsl[0], clamp(baseHsl[1] * 0.2, 0, 20), isLightMode ? 98 : 5]
  });

  // Surface
  items.push({
    role: 'surface',
    hsl: [baseHsl[0], clamp(baseHsl[1] * 0.3, 0, 25), isLightMode ? 100 : 10]
  });

  // Text
  items.push({
    role: 'text',
    hsl: [baseHsl[0], clamp(baseHsl[1] * 0.4, 0, 30), isLightMode ? 10 : 95]
  });

  // Muted Text
  items.push({
    role: 'muted',
    hsl: [baseHsl[0], clamp(baseHsl[1] * 0.3, 0, 20), isLightMode ? 40 : 60]
  });

  // Border
  items.push({
    role: 'border',
    hsl: [baseHsl[0], clamp(baseHsl[1] * 0.3, 0, 25), isLightMode ? 90 : 20]
  });

  // 4. Semantic Colors (Success, Warning, Error) - Only if size is large enough
  if (size >= 10) {
     // Generate semantic colors that are slightly tinted by the base hue
     items.push({ role: 'success', hsl: [140, 70, 45] }); // Green
     items.push({ role: 'warning', hsl: [35, 90, 50] });  // Orange
     items.push({ role: 'error', hsl: [0, 80, 50] });     // Red
  }

  // Trim or pad to exact size requested.
  // We prioritize keeping Base, Primary, Background, Text.
  const priorityRoles: SemanticRole[] = ['base', 'primary', 'background', 'text', 'secondary', 'accent', 'surface', 'border', 'muted', 'accent-2', 'success', 'warning', 'error'];
  
  const finalItems: { role: SemanticRole; hsl: [number, number, number] }[] = [];
  
  for (const role of priorityRoles) {
      if (finalItems.length >= size) break;
      const found = items.find(i => i.role === role);
      if (found) finalItems.push(found);
  }

  // If we still need more colors (e.g., requested 12 but only generated 11), add variations of primary
  let i = 1;
  while (finalItems.length < size) {
      finalItems.push({
          role: 'highlight', // Fallback role
          hsl: [baseHsl[0], baseHsl[1], clamp(baseHsl[2] + (i * 10), 0, 100)]
      });
      i++;
  }

  return finalItems;
}

// --- Harmony Generators ---

type GeneratorFn = (baseHsl: [number, number, number], variant: HarmonyVariantId, size: PaletteSize) => [number, number, number][];

const generators: Record<HarmonyClassId, GeneratorFn> = {
  'analogous': (base, variant) => {
    return [
      base,
      applyVariant([normalizeHue(base[0] + 30), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] - 30), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] + 60), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] - 60), base[1], base[2]], variant),
    ];
  },
  'split-analogous': (base, variant) => {
    return [
      base,
      applyVariant([normalizeHue(base[0] + 60), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] - 60), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] + 90), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] - 90), base[1], base[2]], variant),
    ];
  },
  'complementary': (base, variant) => {
    return [
      base,
      applyVariant([normalizeHue(base[0] + 180), base[1], base[2]], variant),
      applyVariant([base[0], clamp(base[1] - 20, 0, 100), clamp(base[2] + 15, 0, 100)], variant), // lighter base
      applyVariant([normalizeHue(base[0] + 180), clamp(base[1] - 20, 0, 100), clamp(base[2] - 15, 0, 100)], variant), // darker complement
      applyVariant([base[0], clamp(base[1] + 10, 0, 100), clamp(base[2] - 20, 0, 100)], variant), // darker base
    ];
  },
  'split-complementary': (base, variant) => {
    return [
      base,
      applyVariant([normalizeHue(base[0] + 150), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] + 210), base[1], base[2]], variant),
      applyVariant([base[0], clamp(base[1] - 20, 0, 100), clamp(base[2] + 20, 0, 100)], variant),
      applyVariant([normalizeHue(base[0] + 180), clamp(base[1] - 30, 0, 100), base[2]], variant), // True complement, desaturated
    ];
  },
  'triadic': (base, variant) => {
    return [
      base,
      applyVariant([normalizeHue(base[0] + 120), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] + 240), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] + 120), clamp(base[1] - 20, 0, 100), clamp(base[2] + 20, 0, 100)], variant),
      applyVariant([normalizeHue(base[0] + 240), clamp(base[1] - 20, 0, 100), clamp(base[2] - 20, 0, 100)], variant),
    ];
  },
  'tetradic': (base, variant) => {
    return [
      base,
      applyVariant([normalizeHue(base[0] + 90), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] + 180), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] + 270), base[1], base[2]], variant),
      applyVariant([base[0], clamp(base[1] - 30, 0, 100), clamp(base[2] + 20, 0, 100)], variant),
    ];
  },
  'square': (base, variant) => {
     return [
      base,
      applyVariant([normalizeHue(base[0] + 90), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] + 180), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] + 270), base[1], base[2]], variant),
      applyVariant([base[0], clamp(base[1] - 20, 0, 100), clamp(base[2] - 20, 0, 100)], variant),
    ];
  },
  'rectangular': (base, variant) => {
     return [
      base,
      applyVariant([normalizeHue(base[0] + 60), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] + 180), base[1], base[2]], variant),
      applyVariant([normalizeHue(base[0] + 240), base[1], base[2]], variant),
      applyVariant([base[0], clamp(base[1] - 20, 0, 100), clamp(base[2] + 20, 0, 100)], variant),
    ];
  },
  'monochrome': (base, variant) => {
    const step = variant === 'high-range' ? 25 : 15;
    return [
      base,
      applyVariant([base[0], base[1], clamp(base[2] + step, 0, 100)], variant),
      applyVariant([base[0], base[1], clamp(base[2] - step, 0, 100)], variant),
      applyVariant([base[0], base[1], clamp(base[2] + (step * 2), 0, 100)], variant),
      applyVariant([base[0], base[1], clamp(base[2] - (step * 2), 0, 100)], variant),
    ];
  },
  'neutral': (base, variant) => {
    const s = clamp(base[1] * 0.2, 0, 15); // Force low saturation
    return [
      [base[0], s, base[2]],
      applyVariant([base[0], s, clamp(base[2] + 15, 0, 100)], variant),
      applyVariant([base[0], s, clamp(base[2] - 15, 0, 100)], variant),
      applyVariant([normalizeHue(base[0] + 30), s, clamp(base[2] + 5, 0, 100)], variant),
      applyVariant([normalizeHue(base[0] - 30), s, clamp(base[2] - 5, 0, 100)], variant),
    ];
  },
  'accent-led': (base, variant) => {
    // Base is the accent, others are neutral
    const neutralH = base[0];
    return [
      base, // The accent
      applyVariant([neutralH, 10, 95], variant), // Light neutral
      applyVariant([neutralH, 15, 80], variant), // Mid-light neutral
      applyVariant([neutralH, 15, 20], variant), // Dark neutral
      applyVariant([neutralH, 10, 10], variant), // Very dark neutral
    ];
  },
  'warm-shift': (base, variant) => {
    return [
      base,
      applyVariant([normalizeHue(base[0] + 15), clamp(base[1] + 10, 0, 100), base[2]], variant),
      applyVariant([normalizeHue(base[0] + 30), clamp(base[1] + 20, 0, 100), base[2]], variant),
      applyVariant([normalizeHue(base[0] + 45), clamp(base[1] + 10, 0, 100), clamp(base[2] + 10, 0, 100)], variant),
      applyVariant([normalizeHue(base[0] - 15), base[1], clamp(base[2] - 10, 0, 100)], variant),
    ];
  },
  'cool-shift': (base, variant) => {
    return [
      base,
      applyVariant([normalizeHue(base[0] - 15), clamp(base[1] + 10, 0, 100), base[2]], variant),
      applyVariant([normalizeHue(base[0] - 30), clamp(base[1] + 20, 0, 100), base[2]], variant),
      applyVariant([normalizeHue(base[0] - 45), clamp(base[1] + 10, 0, 100), clamp(base[2] - 10, 0, 100)], variant),
      applyVariant([normalizeHue(base[0] + 15), base[1], clamp(base[2] + 10, 0, 100)], variant),
    ];
  },
  'editorial': (base, variant) => {
    // High contrast, sophisticated. Often pairs a deep color with a pale one and a vibrant accent.
    return [
      base,
      applyVariant([normalizeHue(base[0] + 180), clamp(base[1] - 30, 0, 100), 10], variant), // Deep dark
      applyVariant([normalizeHue(base[0] + 30), clamp(base[1] - 20, 0, 100), 90], variant), // Pale light
      applyVariant([normalizeHue(base[0] - 30), clamp(base[1] + 20, 0, 100), 50], variant), // Vibrant accent
      applyVariant([base[0], clamp(base[1] - 40, 0, 100), 50], variant), // Muted mid
    ];
  },
  'brand-classic': (base, variant) => {
    // Reliable, corporate. Base, lighter base, darker base, and a complementary accent.
    return [
      base,
      applyVariant([base[0], clamp(base[1] - 10, 0, 100), clamp(base[2] + 20, 0, 100)], variant),
      applyVariant([base[0], clamp(base[1] + 10, 0, 100), clamp(base[2] - 20, 0, 100)], variant),
      applyVariant([normalizeHue(base[0] + 180), clamp(base[1] - 10, 0, 100), base[2]], variant), // Complement
      applyVariant([base[0], 10, 95], variant), // Off-white
    ];
  },
  'vibrant-modern': (base, variant) => {
    // High saturation, energetic.
    const s = clamp(base[1] + 30, 70, 100);
    return [
      [base[0], s, base[2]],
      applyVariant([normalizeHue(base[0] + 45), s, base[2]], variant),
      applyVariant([normalizeHue(base[0] - 45), s, base[2]], variant),
      applyVariant([normalizeHue(base[0] + 180), s, base[2]], variant),
      applyVariant([base[0], s, clamp(base[2] + 30, 0, 100)], variant),
    ];
  },
  'muted-modern': (base, variant) => {
    // Desaturated, complex.
    const s = clamp(base[1] - 30, 10, 40);
    return [
      [base[0], s, base[2]],
      applyVariant([normalizeHue(base[0] + 30), s, clamp(base[2] + 10, 0, 100)], variant),
      applyVariant([normalizeHue(base[0] - 30), s, clamp(base[2] - 10, 0, 100)], variant),
      applyVariant([normalizeHue(base[0] + 150), s, base[2]], variant),
      applyVariant([base[0], s, clamp(base[2] - 20, 0, 100)], variant),
    ];
  },
  'pastel-system': (base, variant) => {
    // Light, low saturation.
    const l = clamp(base[2] + 20, 75, 95);
    const s = clamp(base[1] - 20, 30, 60);
    return [
      [base[0], s, l],
      applyVariant([normalizeHue(base[0] + 40), s, l], variant),
      applyVariant([normalizeHue(base[0] - 40), s, l], variant),
      applyVariant([normalizeHue(base[0] + 120), s, l], variant),
      applyVariant([normalizeHue(base[0] + 240), s, l], variant),
    ];
  },
  'earth-tone': (base, variant) => {
    // Warm, natural. Shift towards oranges/browns/greens.
    const h = clamp(base[0], 20, 140); // Force into warm/green spectrum if possible, or just use base
    const s = clamp(base[1] - 20, 20, 50);
    return [
      [h, s, base[2]],
      applyVariant([normalizeHue(h + 30), s, clamp(base[2] - 15, 0, 100)], variant),
      applyVariant([normalizeHue(h - 30), s, clamp(base[2] + 15, 0, 100)], variant),
      applyVariant([normalizeHue(h + 60), clamp(s - 10, 0, 100), base[2]], variant),
      applyVariant([h, clamp(s - 20, 0, 100), 90], variant), // Sand/Bone
    ];
  },
  'dark-mode-first': (base, variant) => {
    // Deep shades, luminous accents.
    return [
      base, // Keep base as is, maybe it's the accent
      applyVariant([base[0], clamp(base[1] - 30, 0, 100), 10], variant), // Deep background
      applyVariant([base[0], clamp(base[1] - 20, 0, 100), 15], variant), // Surface
      applyVariant([normalizeHue(base[0] + 180), clamp(base[1] + 20, 0, 100), 60], variant), // Luminous accent
      applyVariant([base[0], 10, 80], variant), // Text
    ];
  },
  'accessibility-first': (base, variant) => {
    // Focus on extreme contrast.
    return [
      base,
      applyVariant([normalizeHue(base[0] + 180), base[1], clamp(base[2] > 50 ? 10 : 90, 0, 100)], variant), // High contrast complement
      applyVariant([base[0], base[1], 5], variant), // Almost black
      applyVariant([base[0], base[1], 95], variant), // Almost white
      applyVariant([normalizeHue(base[0] + 90), base[1], base[2]], variant), // Distinct hue
    ];
  },
  'ui-product-system': (base, variant) => {
    // Comprehensive UI set.
    return [
      base, // Primary
      applyVariant([normalizeHue(base[0] + 20), base[1], base[2]], variant), // Secondary
      applyVariant([base[0], clamp(base[1] - 20, 0, 100), 98], variant), // Bg
      applyVariant([base[0], clamp(base[1] - 20, 0, 100), 100], variant), // Surface
      applyVariant([base[0], clamp(base[1] - 10, 0, 100), 15], variant), // Text
    ];
  },
  'semantic': (base, variant) => {
    // Base + semantic colors.
    return [
      base,
      applyVariant([140, 70, 45], variant), // Success
      applyVariant([35, 90, 50], variant),  // Warning
      applyVariant([0, 80, 50], variant),   // Error
      applyVariant([210, 80, 50], variant), // Info
    ];
  }
};

// --- Main Engine Function ---

export function generateHarmony(input: HarmonyInput): HarmonyOutput {
  const { baseColor, harmonyClass, variant, size } = input;
  
  const baseRgb = hexToRgb(baseColor);
  const baseHsl = rgbToHsl(baseRgb[0], baseRgb[1], baseRgb[2]);

  // 1. Get the generator for the class
  const generator = generators[harmonyClass];
  if (!generator) {
    throw new Error(`Harmony class '${harmonyClass}' not found.`);
  }

  // 2. Generate the base HSL colors
  const rawHslColors = generator(baseHsl, variant, size);

  // 3. Assign roles and format to OutputPaletteItem
  const roleAssignedColors = assignRoles(rawHslColors, size);

  const items: OutputPaletteItem[] = roleAssignedColors.map(item => {
    const rgb = hslToRgb(item.hsl[0], item.hsl[1], item.hsl[2]);
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
    return {
      id: generateId(),
      role: item.role,
      hex,
      rgb,
      hsl: item.hsl,
      contrastOnWhite: getContrastRatio(rgb, [255, 255, 255]),
      contrastOnBlack: getContrastRatio(rgb, [0, 0, 0]),
      name: item.role.charAt(0).toUpperCase() + item.role.slice(1),
    };
  });

  // 4. Calculate Scores (Simplified for now)
  // A real implementation would evaluate contrast ratios between specific roles (e.g., text on background).
  let accessibilityScore = 100;
  let warnings: string[] = [];

  const textItem = items.find(i => i.role === 'text');
  const bgItem = items.find(i => i.role === 'background');

  if (textItem && bgItem) {
    const contrast = getContrastRatio(textItem.rgb, bgItem.rgb);
    if (contrast < 4.5) {
      accessibilityScore -= 30;
      warnings.push(`Low contrast between Text and Background (${contrast.toFixed(2)}:1). Aim for at least 4.5:1.`);
    }
  }

  const harmonyScore = 85; // Placeholder
  const contrastScore = 90; // Placeholder

  return {
    id: generateId(),
    input,
    items,
    contrastScore,
    accessibilityScore,
    harmonyScore,
    warnings
  };
}
