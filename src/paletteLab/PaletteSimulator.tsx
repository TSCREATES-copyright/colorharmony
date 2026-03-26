import { usePaletteSimulation } from '../hooks/usePaletteSimulation';
import { Workspace } from '../components/dashboard/Workspace';
import { SimulationPanel } from './SimulationPanel';

export function PaletteSimulator() {
  const { isActive } = usePaletteSimulation();

  if (!isActive) {
    return <Workspace />;
  }

  return (
    <div className="flex-1 flex overflow-hidden">
      <div className="flex-1 border-r border-gray-200 flex flex-col overflow-hidden">
        <Workspace />
      </div>
      <div className="flex-1 flex flex-col bg-gray-100 overflow-hidden">
        <SimulationPanel />
      </div>
    </div>
  );
}
