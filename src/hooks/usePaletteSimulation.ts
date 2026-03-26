import { create } from 'zustand';
import { SimulationScenario, SimulationState } from '../paletteLab/simulationTypes';

interface PaletteSimulationStore extends SimulationState {
  toggleSimulation: (isActive: boolean) => void;
  setScenario: (scenario: SimulationScenario) => void;
}

export const usePaletteSimulationStore = create<PaletteSimulationStore>((set) => ({
  isActive: false,
  scenario: 'dashboard',
  theme: {
    primary: '#3B82F6',
    secondary: '#10B981',
    background: '#F9FAFB',
    surface: '#FFFFFF',
    text: '#111827',
    muted: '#6B7280',
    accent: '#F59E0B',
  },
  toggleSimulation: (isActive) => set({ isActive }),
  setScenario: (scenario) => set({ scenario }),
}));

export function usePaletteSimulation() {
  return usePaletteSimulationStore();
}
