import { useAppStore } from '../../state/store';
import { useHarmonyEngine } from '../../hooks/useHarmonyEngine';
import { useConfirmAction } from '../../hooks/useConfirmAction';
import { Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';

interface PaletteItem {
  id: string;
  hex: string;
}

interface Palette {
  id: string;
  input: {
    baseColor: string;
    harmonyClass: string;
    variant: string;
    size: number;
  };
  items: PaletteItem[];
}

export function HistoryPanel() {
  const { history = [], setBaseColor, setHarmonyClass, setVariant, setSize } = useHarmonyEngine();
  const { requestConfirm } = useConfirmAction();

  if (!history || history.length === 0) return null;

  const loadPalette = (palette: Palette) => {
    setBaseColor(palette.input.baseColor);
    setHarmonyClass(palette.input.harmonyClass);
    setVariant(palette.input.variant);
    setSize(palette.input.size);
  };

  return (
    <div className="h-32 border-t border-gray-200 bg-white shrink-0 flex items-center px-6 overflow-x-auto gap-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 shrink-0 mr-4">
        History
      </div>

      {history.map((palette) => (
        <div key={palette.id} className="relative group shrink-0">
          <button
            onClick={() => loadPalette(palette)}
            className="flex h-16 w-32 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:ring-2 hover:ring-blue-500 transition-all"
          >
            {palette.items?.map((s) => (
              <div
                key={s.id}
                className="flex-1 h-full"
                style={{ backgroundColor: s.hex }}
              />
            )) ?? null}
          </button>
        </div>
      ))}
    </div>
  );
}