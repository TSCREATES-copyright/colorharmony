import { HarmonyOutput } from '../../harmony/harmonyTypes';
import { colorPromptTemplates } from './colorPromptTemplates';
import { PromptIntent, PromptDepth, ColorPromptOutput } from './colorPromptTypes';

export function generateColorPrompt(
  palette: HarmonyOutput,
  intent: PromptIntent,
  depth: PromptDepth
): ColorPromptOutput {
  const template = colorPromptTemplates.find(t => t.id === intent);
  
  if (!template) {
    throw new Error(`Template not found for intent: ${intent}`);
  }

  const body = template.generate(palette, depth);

  return {
    title: template.title,
    body
  };
}
