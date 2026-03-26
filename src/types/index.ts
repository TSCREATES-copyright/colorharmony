export type HarmonyRule = 'analogous' | 'complementary' | 'triad' | 'tetrad' | 'monochrome';

export type SwatchRole = 'base' | 'accent' | 'support' | 'neutral' | 'background' | 'text';

export type PaletteSwatch = {
  id: string;
  role: SwatchRole;
  hex: string;
  rgb: [number, number, number];
  hsl: [number, number, number];
  contrastOnWhite: number;
  contrastOnBlack: number;
  name: string;
  locked?: boolean;
};

export type PaletteItem = {
  id: string;
  name?: string;
  items: { hex: string; id: string }[];
  input?: {
    baseColor: string;
    harmonyClass: string;
    variant?: string;
    size?: number;
  };
};

export type PaletteRecord = {
  id: string;
  title: string;
  baseColor: string;
  rule: HarmonyRule;
  swatches: PaletteSwatch[];
  score: number;
  tags: string[];
  notes?: string;
  createdAt: number;
  updatedAt: number;
  version: number;
};

export type AppSettings = {
  theme: 'light' | 'dark';
  defaultRule: HarmonyRule;
  exportFormat: 'css' | 'colorprompt';
  dailyUsageCount: number;
  lastUsageDate: string;
  premiumUnlocked: boolean;
};