import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TutorialState } from '../walkthrough/tutorialTypes';

interface TutorialStore extends TutorialState {
  startTutorial: () => void;
  endTutorial: () => void;
  nextStep: () => void;
  prevStep: () => void;
  setHasSeenTutorial: (seen: boolean) => void;
}

export const useTutorialStore = create<TutorialStore>()(
  persist(
    (set, get) => ({
      isActive: false,
      currentStepIndex: 0,
      hasSeenTutorial: false,

      startTutorial: () => set({ isActive: true, currentStepIndex: 0 }),
      endTutorial: () => set({ isActive: false, hasSeenTutorial: true }),
      nextStep: () => set((state) => ({ currentStepIndex: state.currentStepIndex + 1 })),
      prevStep: () => set((state) => ({ currentStepIndex: Math.max(0, state.currentStepIndex - 1) })),
      setHasSeenTutorial: (seen) => set({ hasSeenTutorial: seen }),
    }),
    {
      name: 'colorharmony-tutorial',
      partialize: (state) => ({ hasSeenTutorial: state.hasSeenTutorial }),
    }
  )
);

export function useTutorial() {
  return useTutorialStore();
}
