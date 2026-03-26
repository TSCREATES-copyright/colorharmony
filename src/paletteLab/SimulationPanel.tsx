import { usePaletteSimulation } from '../hooks/usePaletteSimulation';
import { useHarmonyEngine } from '../hooks/useHarmonyEngine';
import { mapPaletteToTheme } from './simulationEngine';
import { OutcomePreview } from './OutcomePreview';
import { ScenarioBuilder } from './ScenarioBuilder';

export function SimulationPanel() {
  const { currentOutput } = useHarmonyEngine();
  const { scenario } = usePaletteSimulation();

  if (!currentOutput) return null;

  const theme = mapPaletteToTheme(currentOutput);

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      <ScenarioBuilder />
      <div className="flex-1 overflow-auto p-6 flex items-center justify-center">
        <OutcomePreview scenario={scenario} theme={theme} />
      </div>
    </div>
  );
}
