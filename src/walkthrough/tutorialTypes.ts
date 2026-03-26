export interface TutorialStep {
  id: string;
  target: string; // CSS selector
  title: string;
  message: string;
  placement: 'top' | 'bottom' | 'left' | 'right';
}

export interface TutorialState {
  isActive: boolean;
  currentStepIndex: number;
  hasSeenTutorial: boolean;
}
