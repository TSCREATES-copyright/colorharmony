import { useAppStore } from '../../state/store';
import { PaletteTile } from '../tools/PaletteTile';
import { ContrastBadge } from '../tools/ContrastBadge';
import { Lock } from 'lucide-react';
import { useHarmonyEngine } from '../../hooks/useHarmonyEngine';
import { HarmonyPalettePreview } from '../harmony/HarmonyPalettePreview';

export function Workspace() {
  const { currentOutput } = useHarmonyEngine();
  const settings = useAppStore((state) => state.settings);
  const toggleUpgradeModal = useAppStore((state) => state.toggleUpgradeModal);

  if (!currentOutput) return <div className="flex-1 bg-gray-50 flex items-center justify-center">Loading...</div>;

  return (
    <section className="flex-1 flex flex-col bg-gray-50 overflow-hidden relative" data-tour="workspace">
      <div className="flex-1 flex flex-col p-8 gap-8 overflow-y-auto">
        <HarmonyPalettePreview />
      </div>
      
      <div className="h-24 bg-white border-t border-gray-200 flex items-center justify-between px-8 shrink-0" data-tour="contrast-score">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900">Contrast Score 🧮</span>
            <span className="text-xs text-gray-500">(Based on text vs background)</span>
          </div>
          {settings.premiumUnlocked ? (
            <div className="text-2xl font-bold text-gray-900">{currentOutput.contrastScore}/100</div>
          ) : (
            <button 
              onClick={() => toggleUpgradeModal(true)}
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors bg-gray-100 hover:bg-blue-50 px-3 py-1.5 rounded-lg"
            >
              <Lock className="w-4 h-4" /> Pro Feature
            </button>
          )}
        </div>
        <div className="flex gap-4">
          {settings.premiumUnlocked ? (
            <>
              <ContrastBadge ratio={currentOutput.items.find(s => s.role === 'text')?.contrastOnWhite || 1} bg="white" />
              <ContrastBadge ratio={currentOutput.items.find(s => s.role === 'text')?.contrastOnBlack || 1} bg="black" />
            </>
          ) : (
            <div className="flex items-center gap-2 text-sm text-gray-400 italic">
              Unlock Pro to view contrast ratios 🔐
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
