import { useState } from 'react';
import { useAppStore } from '../../state/store';
import { Button } from '../ui/Button';
import { ExportMenu } from '../tools/ExportMenu';
import { Download, Save } from 'lucide-react';
import { useToast } from '../../hooks/useToast';
import { useHarmonyEngine } from '../../hooks/useHarmonyEngine';
import { useHarmonyCatalog } from '../../hooks/useHarmonyCatalog';
import { SavedPalettesPanel } from '../palette/SavedPalettesPanel';

export function InspectorPanel() {
  const { currentOutput } = useHarmonyEngine();
  const { getDescriptor } = useHarmonyCatalog();
  const { success, error } = useToast();
  const addPalette = useAppStore((state) => state.addPalette);
  const [activeTab, setActiveTab] = useState<'current' | 'saved'>('current');

  if (!currentOutput && activeTab === 'current') return null;

  const handleSave = () => {
    if (!currentOutput?.items?.length) {
      error('⛔ Cannot save ⛔', 'No palette generated yet.');
      return;
    }

    try {
      addPalette({
        id: crypto.randomUUID(),
        items: currentOutput.items.map((c) => ({ id: crypto.randomUUID(), hex: c.hex })),
        input: {
          baseColor: currentOutput.input.baseColor,
          harmonyClass: currentOutput.input.harmonyClass,
          variant: currentOutput.input.variant,
          size: currentOutput.input.size,
        },
      });
      success('🫟 Palette saved 🫟', 'Added to your library.');
    } catch (err) {
      console.error(err);
      error('🚨 Failed to save 🚨', 'Something went wrong while saving the palette.');
    }
  };

  const descriptor = currentOutput ? getDescriptor(currentOutput.input.harmonyClass) : null;

  return (
    <aside className="w-80 border-l border-gray-200 bg-white flex flex-col shrink-0 overflow-y-auto" data-tour="inspector">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          className={`flex-1 py-2 text-sm font-medium transition-colors ${
            activeTab === 'current' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('current')}
        >
          📍 Current Palette
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium transition-colors ${
            activeTab === 'saved' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('saved')}
        >
          📥 Saved Palettes
        </button>
      </div>

      <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-8">
        {activeTab === 'current' && currentOutput && (
          <>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-1">{descriptor?.name || 'Palette'}</h2>
              <p className="text-sm text-gray-500">Generated from {currentOutput.input.baseColor.toUpperCase()}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Button className="w-full justify-start gap-2" variant="outline" onClick={handleSave}>
                <Save className="w-4 h-4" /> Save to Library
              </Button>
              <ExportMenu palette={currentOutput} />
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Color Details</h3>
              <div className="flex flex-col gap-4">
                {currentOutput.items.map((swatch) => (
                  <div key={swatch.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50">
                    <div className="w-8 h-8 rounded-md shadow-sm border border-gray-200" style={{ backgroundColor: swatch.hex }} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">{swatch.name}</div>
                      <div className="text-xs text-gray-500 font-mono">{swatch.hex.toUpperCase()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'saved' && <SavedPalettesPanel />}
      </div>
    </aside>
  );
}