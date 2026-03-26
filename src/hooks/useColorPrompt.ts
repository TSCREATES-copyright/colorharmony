import { useState, useMemo } from 'react';
import { useHarmonyEngine } from '../hooks/useHarmonyEngine';
import { PromptIntent, PromptDepth } from '../systems/colorPromptTypes';
import { generateColorPrompt } from '../systems/colorPromptEngine';
import { useToast } from './useToast';

export function useColorPrompt() {
  const { currentOutput } = useHarmonyEngine();
  const [intent, setIntent] = useState<PromptIntent>('ui-theme');
  const [depth, setDepth] = useState<PromptDepth>('concise');
  const { success } = useToast();

  const generatedPrompt = useMemo(() => {
    if (!currentOutput) return null;
    return generateColorPrompt(currentOutput, intent, depth);
  }, [currentOutput, intent, depth]);

  const copyPrompt = () => {
    if (generatedPrompt) {
      navigator.clipboard.writeText(generatedPrompt.body);
      success('Prompt Copied', 'Ready to paste into ChatGPT or your favorite AI tool.');
    }
  };

  return {
    intent,
    setIntent,
    depth,
    setDepth,
    generatedPrompt,
    copyPrompt
  };
}
