import { HarmonyOutput } from '../harmony/harmonyTypes';

export function formatCSS(palette: HarmonyOutput): string {
  let css = ':root {\n';
  palette.items.forEach((item) => {
    css += `  --color-${item.role}: ${item.hex};\n`;
  });
  css += '}\n';
  return css;
}
