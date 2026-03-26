import { Modal } from '../ui/Modal';
import { useColorPrompt } from '../../hooks/useColorPrompt';
import { ColorPromptPresetPicker } from '../ui/ColorPromptPresetPicker';
import { ColorPromptCopyButton } from '../ui/ColorPromptCopyButton';

interface ColorPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ColorPromptModal({ isOpen, onClose }: ColorPromptModalProps) {
  const { intent, setIntent, depth, setDepth, generatedPrompt } = useColorPrompt();

  if (!generatedPrompt) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Generate a ready-to-send prompt">
      <div className="flex flex-col gap-6">
        <p className="text-sm text-gray-500 -mt-2">
          Turn this palette into a clean AI brief with roles, harmony notes, and usage guidance.
        </p>

        <ColorPromptPresetPicker 
          intent={intent} 
          setIntent={setIntent} 
          depth={depth} 
          setDepth={setDepth} 
        />

        <div className="flex flex-col">
          <label className="block text-sm font-medium text-gray-700 mb-2">Preview</label>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-64 overflow-y-auto font-mono text-xs text-gray-800 whitespace-pre-wrap">
            {generatedPrompt.body}
          </div>
        </div>

        <ColorPromptCopyButton />
      </div>
    </Modal>
  );
}
