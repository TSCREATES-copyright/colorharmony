import { HarmonyRule, PaletteSwatch, SwatchRole } from '../types';
import { hexToRgb, hslToRgb, rgbToHex, rgbToHsl } from '../utils/color';
import { getContrastRatio } from '../utils/contrast';
import { generateId } from '../utils/ids';

export function generatePalette(baseHex: string, rule: HarmonyRule): PaletteSwatch[] {
  const baseRgb = hexToRgb(baseHex);
  const baseHsl = rgbToHsl(baseRgb[0], baseRgb[1], baseRgb[2]);
  const [h, s, l] = baseHsl;

  const swatches: { role: SwatchRole; hsl: [number, number, number] }[] = [];

  // Base is always first
  swatches.push({ role: 'base', hsl: [h, s, l] });

  switch (rule) {
    case 'analogous':
      swatches.push({ role: 'support', hsl: [(h + 30) % 360, s, l] });
      swatches.push({ role: 'accent', hsl: [(h - 30 + 360) % 360, Math.min(s + 10, 100), l] });
      break;
    case 'complementary':
      swatches.push({ role: 'support', hsl: [h, Math.max(s - 20, 0), Math.max(l - 10, 0)] });
      swatches.push({ role: 'accent', hsl: [(h + 180) % 360, Math.min(s + 10, 100), l] });
      break;
    case 'triad':
      swatches.push({ role: 'support', hsl: [(h + 120) % 360, s, l] });
      swatches.push({ role: 'accent', hsl: [(h + 240) % 360, s, l] });
      break;
    case 'tetrad':
      swatches.push({ role: 'support', hsl: [(h + 90) % 360, s, l] });
      swatches.push({ role: 'accent', hsl: [(h + 180) % 360, s, l] });
      break;
    case 'monochrome':
      swatches.push({ role: 'support', hsl: [h, s, Math.max(l - 20, 0)] });
      swatches.push({ role: 'accent', hsl: [h, Math.min(s + 20, 100), Math.min(l + 20, 100)] });
      break;
  }

  // Add Background and Text
  const isLight = l > 50;
  swatches.push({
    role: 'background',
    hsl: [h, Math.max(s - 30, 0), isLight ? 95 : 10],
  });
  swatches.push({
    role: 'text',
    hsl: [h, Math.max(s - 20, 0), isLight ? 10 : 95],
  });

  return swatches.map((swatch) => {
    const rgb = hslToRgb(swatch.hsl[0], swatch.hsl[1], swatch.hsl[2]);
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
    return {
      id: generateId(),
      role: swatch.role,
      hex,
      rgb,
      hsl: swatch.hsl,
      contrastOnWhite: getContrastRatio(rgb, [255, 255, 255]),
      contrastOnBlack: getContrastRatio(rgb, [0, 0, 0]),
      name: `${swatch.role.charAt(0).toUpperCase() + swatch.role.slice(1)}`,
    };
  });
}
