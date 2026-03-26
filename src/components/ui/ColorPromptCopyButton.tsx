import { Button } from './Button';
import { Copy } from 'lucide-react';
import { useColorPrompt } from '../../hooks/useColorPrompt';

export function ColorPromptCopyButton() {
  const { copyPrompt } = useColorPrompt();

  return (
    <Button onClick={copyPrompt} className="w-full gap-2">
      <Copy className="w-4 h-4" /> Copy Prompt
    </Button>
  );
}
