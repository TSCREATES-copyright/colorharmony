// src/state/store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppSettings, PaletteItem } from '../types';

interface AppState {
  // App settings
  settings: AppSettings;
  isUpgradeModalOpen: boolean;

  // Saved palettes
  savedPalettes: PaletteItem[];

  // Actions
  toggleUpgradeModal: (open: boolean) => void;
  unlockPremium: () => void;
  addPalette: (palette: PaletteItem) => void;
  removePalette: (id: string) => void;
  clearPalettes: () => void;
  loadHistory: () => Promise<void>;
}

const DEFAULT_SETTINGS: AppSettings = {
  theme: 'light',
  defaultRule: 'analogous',
  exportFormat: 'css',
  dailyUsageCount: 0,
  lastUsageDate: new Date().toISOString().split('T')[0],
  premiumUnlocked: false,
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      settings: DEFAULT_SETTINGS,
      isUpgradeModalOpen: false,
      savedPalettes: JSON.parse(localStorage.getItem('savedPalettes') || '[]'),

      loadHistory: async () => {
        // History is now managed elsewhere
      },

      toggleUpgradeModal: (open: boolean) => set({ isUpgradeModalOpen: open }),
      unlockPremium: () =>
        set((state) => ({
          settings: { ...state.settings, premiumUnlocked: true },
          isUpgradeModalOpen: false,
        })),

      // Palette actions
      addPalette: (palette: PaletteItem) =>
        set((state) => {
          const newPalettes = [palette, ...state.savedPalettes];
          localStorage.setItem('savedPalettes', JSON.stringify(newPalettes));
          return { savedPalettes: newPalettes };
        }),

      removePalette: (id: string) =>
        set((state) => {
          const newPalettes = state.savedPalettes.filter((p) => p.id !== id);
          localStorage.setItem('savedPalettes', JSON.stringify(newPalettes));
          return { savedPalettes: newPalettes };
        }),

      clearPalettes: () =>
        set(() => {
          localStorage.setItem('savedPalettes', JSON.stringify([]));
          return { savedPalettes: [] };
        }),
    }),
    {
      name: 'colorharmony-settings',
      partialize: (state) => ({
        settings: state.settings,
        savedPalettes: state.savedPalettes,
      }),
    }
  )
);