import { usePaletteSimulation } from '../hooks/usePaletteSimulation';
import { SimulationScenario } from './simulationTypes';

export function ScenarioBuilder() {
  const { scenario, setScenario } = usePaletteSimulation();

  const scenarios: { value: SimulationScenario; label: string }[] = [
    { value: 'dashboard', label: 'Dashboard UI' },
    { value: 'landing-page', label: 'Landing Page' },
    { value: 'mobile-app', label: 'Mobile App' },
  ];

  return (
    <div className="h-14 border-b border-gray-200 bg-white flex items-center px-4 shrink-0 gap-2">
      <span className="text-sm font-medium text-gray-700 mr-2">Scenario:</span>
      {scenarios.map((s) => (
        <button
          key={s.value}
          onClick={() => setScenario(s.value)}
          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
            scenario === s.value
              ? 'bg-blue-100 text-blue-700 font-medium'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
