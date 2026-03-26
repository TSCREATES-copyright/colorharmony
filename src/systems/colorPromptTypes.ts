import { HarmonyOutput } from '../../harmony/harmonyTypes';

export type PromptIntent = 
  | 'ui-theme' 
  | 'brand-direction' 
  | 'accessibility' 
  | 'frontend' 
  | 'creative';

export type PromptDepth = 'concise' | 'detailed';

export interface PromptTemplate {
  id: PromptIntent;
  title: string;
  description: string;
  generate: (palette: HarmonyOutput, depth: PromptDepth) => string;
}

export interface ColorPromptOutput {
  title: string;
  body: string;
}
