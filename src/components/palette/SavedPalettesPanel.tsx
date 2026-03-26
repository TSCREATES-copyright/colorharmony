import { Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { usePaletteLibrary } from '../../hooks/usePaletteLibrary';

export function SavedPalettesPanel() {
  const { palettes, deletePalette, clearPalettes } = usePaletteLibrary();

  if (!palettes.length) {
    return (
      <div className="h-32 flex items-center justify-center text-gray-400 text-sm px-2">
        You haven't saved any ColorHarmony palettes yet 🥺 . Click "Save to Library" to try it out! 💌
      </div>
    );
  }

  return (
    <div className="flex items-center px-2 overflow-x-auto gap-4">
      {palettes.map((palette) => (
        <div key={palette.id} className="relative group shrink-0">
          <button className="flex h-16 w-32 rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:ring-2 hover:ring-blue-500 transition-all">
            {palette.items.map((s) => (
              <div key={s.id} className="flex-1 h-full" style={{ backgroundColor: s.hex }} />
            ))}
          </button>
          <button
            onClick={() => deletePalette(palette.id)}
            className="absolute top-1 right-1 text-gray-500 hover:text-red-500 p-1 rounded-full bg-white shadow-sm"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
      {palettes.length > 0 && (
        <Button onClick={clearPalettes} size="sm" className="ml-2 flex-shrink-0">
          Clear All
        </Button>
      )}
    </div>
  );
}