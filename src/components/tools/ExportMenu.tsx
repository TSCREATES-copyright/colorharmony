import { HarmonyOutput } from '../../harmony/harmonyTypes';
import { formatCSS } from '../../utils/format';
import { Button } from '../ui/Button';
import { Code, Sparkles } from 'lucide-react';
import { useAppStore } from '../../state/store';
import { useState } from 'react';
import { ColorPromptModal } from './ColorPromptModal';

export function ExportMenu({ palette }: { palette: HarmonyOutput }) {
  const settings = useAppStore((state) => state.settings);
  const toggleUpgradeModal = useAppStore((state) => state.toggleUpgradeModal);
  const [copiedFormat, setCopiedFormat] = useState<'css' | null>(null);
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);

  const handleExportCSS = () => {
    const content = formatCSS(palette);
    navigator.clipboard.writeText(content);
    setCopiedFormat('css');
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const handleOpenPrompt = () => {
    if (!settings.premiumUnlocked) {
      toggleUpgradeModal(true);
      return;
    }
    setIsPromptModalOpen(true);
  };

  return (
    <>
      <div className="flex gap-2">
        <Button variant="outline" className="flex-1 gap-2" onClick={handleExportCSS}>
          <Code className="w-4 h-4" /> {copiedFormat === 'css' ? 'Copied!' : 'CSS'}
        </Button>
        <Button variant="outline" className="flex-1 gap-2" onClick={handleOpenPrompt}>
          <Sparkles className="w-4 h-4" /> ColorPrompt
        </Button>
      </div>
      <ColorPromptModal isOpen={isPromptModalOpen} onClose={() => setIsPromptModalOpen(false)} />
    </>
  );
}
