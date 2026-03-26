import { HarmonyOutput, SemanticRole } from '../harmony/harmonyTypes';
import { SimulationTheme } from './simulationTypes';

export function mapPaletteToTheme(palette: HarmonyOutput): SimulationTheme {
  const getHexByRole = (role: SemanticRole, fallback: string) => {
    const swatch = palette.items.find(s => s.role === role);
    return swatch ? swatch.hex : fallback;
  };

  const primary = getHexByRole('base', '#3B82F6');
  const secondary = getHexByRole('secondary', getHexByRole('primary', '#10B981'));
  const accent = getHexByRole('accent', '#F59E0B');
  const background = getHexByRole('background', '#F9FAFB');
  const neutral = getHexByRole('muted', '#6B7280');
  const text = getHexByRole('text', '#111827');
  const surface = getHexByRole('surface', '#FFFFFF');

  return {
    primary,
    secondary,
    accent,
    background,
    surface,
    text,
    muted: neutral,
  };
}
