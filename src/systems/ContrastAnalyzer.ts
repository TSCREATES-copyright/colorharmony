import { PaletteSwatch } from '../types';
import { getContrastRatio } from '../utils/contrast';

export function analyzeContrast(swatches: PaletteSwatch[]) {
  const bgSwatch = swatches.find((s) => s.role === 'background');
  const textSwatch = swatches.find((s) => s.role === 'text');
  
  const bgRgb = bgSwatch ? bgSwatch.rgb : [255, 255, 255] as [number, number, number];
  const textRgb = textSwatch ? textSwatch.rgb : [0, 0, 0] as [number, number, number];

  const mainContrast = getContrastRatio(textRgb, bgRgb);
  
  // Calculate a simple score out of 100
  let score = 0;
  if (mainContrast >= 7) score += 40;
  else if (mainContrast >= 4.5) score += 30;
  else if (mainContrast >= 3) score += 15;

  // Add points for variety in lightness
  const lightnesses = swatches.map(s => s.hsl[2]);
  const maxL = Math.max(...lightnesses);
  const minL = Math.min(...lightnesses);
  if (maxL - minL > 60) score += 30;
  else if (maxL - minL > 40) score += 20;

  // Add points for saturation balance
  const saturations = swatches.map(s => s.hsl[1]);
  const avgS = saturations.reduce((a, b) => a + b, 0) / saturations.length;
  if (avgS > 20 && avgS < 80) score += 30;
  else score += 15;

  return {
    mainContrast,
    score: Math.min(100, Math.round(score)),
  };
}
