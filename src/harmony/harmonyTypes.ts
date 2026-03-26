export type HarmonyClassId = 
  | 'analogous' | 'split-analogous' | 'complementary' | 'split-complementary'
  | 'triadic' | 'tetradic' | 'square' | 'rectangular' | 'monochrome'
  | 'neutral' | 'accent-led' | 'warm-shift' | 'cool-shift' | 'editorial'
  | 'brand-classic' | 'vibrant-modern' | 'muted-modern' | 'pastel-system'
  | 'earth-tone' | 'dark-mode-first' | 'accessibility-first' | 'ui-product-system'
  | 'marketing' | 'creative' | 'soft-contrast' | 'high-contrast' | 'natural'
  | 'luxury' | 'minimal' | 'energy' | 'semantic' | 'neutral-heavy'
  | 'dual-accent' | 'balanced-interface' | 'radial' | 'tonal-gradient'
  | 'desaturated' | 'high-saturation';

export type HarmonyVariantId = 
  | 'standard' | 'soft' | 'vivid' | 'balanced' | 'bold' | 'subtle' 
  | 'minimal' | 'rich' | 'high-range' | 'calm' | 'active' | 'energetic';

export type PaletteSize = 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type SemanticRole = 
  | 'base' | 'primary' | 'secondary' | 'accent' | 'accent-2' 
  | 'background' | 'surface' | 'border' | 'text' | 'muted' 
  | 'highlight' | 'success' | 'warning' | 'error';

export interface HarmonyClassDescriptor {
  id: HarmonyClassId;
  name: string;
  description: string;
  tags: string[];
  recommendedUseCases: string[];
  supportedVariants: HarmonyVariantId[];
  defaultVariant: HarmonyVariantId;
  minSize: PaletteSize;
  maxSize: PaletteSize;
}

export interface HarmonyInput {
  baseColor: string; // hex
  harmonyClass: HarmonyClassId;
  variant: HarmonyVariantId;
  size: PaletteSize;
}

export interface OutputPaletteItem {
  id: string;
  role: SemanticRole;
  hex: string;
  rgb: [number, number, number];
  hsl: [number, number, number];
  contrastOnWhite: number;
  contrastOnBlack: number;
  name: string;
  locked?: boolean;
}

export interface HarmonyOutput {
  id: string;
  input: HarmonyInput;
  items: OutputPaletteItem[];
  contrastScore: number;
  accessibilityScore: number;
  harmonyScore: number;
  warnings: string[];
}
