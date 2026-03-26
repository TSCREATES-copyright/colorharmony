import { HarmonyOutput } from '../../harmony/harmonyTypes';
import { PromptTemplate, PromptDepth } from './colorPromptTypes';

function formatPaletteList(palette: HarmonyOutput, detailed: boolean): string {
  return palette.items.map(s => {
    let line = `- ${s.name} (${s.role}): ${s.hex.toUpperCase()}`;
    if (detailed) {
      line += `\n  Contrast on White: ${s.contrastOnWhite.toFixed(2)}:1 | Contrast on Black: ${s.contrastOnBlack.toFixed(2)}:1`;
    }
    return line;
  }).join('\n');
}

function getBaseContext(palette: HarmonyOutput, detailed: boolean): string {
  const base = `Palette summary:
- Base color: ${palette.input.baseColor.toUpperCase()}
- Harmony class: ${palette.input.harmonyClass}
- Variant: ${palette.input.variant}
- Overall Contrast Score: ${palette.contrastScore}/100
- Accessibility Score: ${palette.accessibilityScore}/100

Colors:
${formatPaletteList(palette, detailed)}`;

  return base;
}

export const colorPromptTemplates: PromptTemplate[] = [
  {
    id: 'ui-theme',
    title: 'UI Theme Prompt',
    description: 'For product designers and frontend teams.',
    generate: (palette, depth) => {
      const detailed = depth === 'detailed';
      return `You are working with a color palette for a product design system.

${getBaseContext(palette, detailed)}

Accessibility notes:
- Ensure text contrast meets WCAG AA standards (4.5:1 for normal text).
- Use the base color as the primary brand anchor.
- Use the accent color sparingly for emphasis.
- Best used with clear semantic roles.

Task:
Create a polished design direction using this palette for a modern SaaS dashboard.

Requirements:
- Keep the style clean, premium, and readable.
- Provide specific guidance on which colors to use for backgrounds, surfaces, primary buttons, borders, and text.
- Return a practical implementation-ready response.`;
    }
  },
  {
    id: 'brand-direction',
    title: 'Brand Direction Prompt',
    description: 'For identity and marketing work.',
    generate: (palette, depth) => {
      const detailed = depth === 'detailed';
      return `You are an expert brand designer working on a new visual identity.

${getBaseContext(palette, detailed)}

Task:
Develop a comprehensive brand direction based on this color palette.

Requirements:
- Describe the mood, tone, and personality this palette evokes.
- Suggest typography pairings (one serif or sans-serif for headings, one clean sans-serif for body) that complement these colors.
- Provide guidance on how to use these colors in marketing materials, social media assets, and packaging.
- Keep the tone professional, inspiring, and actionable.`;
    }
  },
  {
    id: 'accessibility',
    title: 'Accessibility Review Prompt',
    description: 'For checking readable combinations.',
    generate: (palette, depth) => {
      const detailed = depth === 'detailed';
      return `You are an accessibility expert reviewing a color palette for a digital product.

${getBaseContext(palette, detailed)}

Task:
Perform a comprehensive accessibility review of this color palette.

Requirements:
- Identify the best color combinations for text and backgrounds to ensure maximum readability.
- Highlight any potential contrast issues based on the provided contrast ratios.
- Suggest alternative shades or usage patterns if any colors fail WCAG AA standards.
- Provide a clear, actionable summary for the design team.`;
    }
  },
  {
    id: 'frontend',
    title: 'Frontend Implementation Prompt',
    description: 'For asking AI to turn palette into CSS, tokens, or components.',
    generate: (palette, depth) => {
      const detailed = depth === 'detailed';
      return `You are a Senior Frontend Engineer implementing a design system.

${getBaseContext(palette, detailed)}

Task:
Convert this color palette into production-ready frontend code.

Requirements:
- Generate a complete set of CSS variables (custom properties) for the :root scope.
- Include semantic token names (e.g., --color-primary, --color-surface, --color-text-muted).
- Provide a Tailwind CSS configuration snippet extending the theme.colors object.
- Keep the code clean, well-commented, and ready to copy-paste.`;
    }
  },
  {
    id: 'creative',
    title: 'Creative Direction Prompt',
    description: 'For concept-heavy brand exploration.',
    generate: (palette, depth) => {
      const detailed = depth === 'detailed';
      return `You are a Creative Director brainstorming a new conceptual campaign.

${getBaseContext(palette, detailed)}

Task:
Create a vivid, concept-heavy creative direction using this color palette as the foundation.

Requirements:
- Describe a visual metaphor or theme that ties these colors together.
- Suggest photography styles, illustration techniques, or textures that would enhance this palette.
- Write a short, evocative manifesto (3-4 sentences) that captures the essence of this color story.
- Push the boundaries of conventional design while maintaining a cohesive aesthetic.`;
    }
  }
];
