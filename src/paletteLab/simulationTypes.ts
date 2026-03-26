export type SimulationScenario = 'dashboard' | 'landing-page' | 'mobile-app';

export interface SimulationTheme {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  accent: string;
}

export interface SimulationState {
  isActive: boolean;
  scenario: SimulationScenario;
  theme: SimulationTheme;
}
