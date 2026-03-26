// src/components/dashboard/AppShell.tsx
import { useEffect } from 'react';
import { useAppStore } from '../../state/store';
import { LeftPanel } from './LeftPanel';
import { InspectorPanel } from './InspectorPanel';
import { LicenseModal } from './LicenseModal';
import { Palette, FlaskConical, HelpCircle } from 'lucide-react';
import { ToastUI } from '../../systems/ToastUI';
import { PaletteSimulator } from '../../paletteLab/PaletteSimulator';
import { usePaletteSimulation } from '../../hooks/usePaletteSimulation';
import { useToast } from '../../hooks/useToast';
import { Tutorial } from '../../walkthrough/Tutorial';
import { useTutorial } from '../../hooks/useTutorial';
import { useHarmonyEngine } from '../../hooks/useHarmonyEngine';

export function AppShell() {
  const settings = useAppStore((state) => state.settings);
  const toggleUpgradeModal = useAppStore((state) => state.toggleUpgradeModal);
  const { generate, currentOutput } = useHarmonyEngine();
  const { isActive, toggleSimulation } = usePaletteSimulation();
  const { info } = useToast();
  const { startTutorial } = useTutorial();

  useEffect(() => {
    if (!currentOutput) {
      generate(); // Generate initial palette
    }
  }, []);

  const handleToggleLab = () => {
    if (!settings.premiumUnlocked) {
      toggleUpgradeModal(true);
      return;
    }
    toggleSimulation(!isActive);
    if (!isActive) {
      info('Palette Lab Active', 'Simulating your palette in real-time UI.');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      {/* TopBar */}
      <header className="h-14 border-b border-gray-200 bg-white flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-2">
          <Palette className="w-5 h-5 text-blue-600" />
          <h1 className="font-semibold tracking-tight text-gray-900">ColorHarmony 🫟</h1>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <button 
            data-tour="palette-lab"
            onClick={handleToggleLab}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors text-sm font-medium ${
              isActive 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FlaskConical className="w-4 h-4" />
            Palette Lab 
          </button>
          <span className="text-gray-300">|</span>
          <button 
            onClick={startTutorial}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            Tutorial
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        <LeftPanel />
        <PaletteSimulator />
        <InspectorPanel />
      </main>

      {/* Modals & Toasts */}
      <LicenseModal />
      <ToastUI />
      <Tutorial />
    </div>
  );
}