// src/hooks/usePaletteLibrary.ts
import { useAppStore } from '../state/store';
import { PaletteItem } from '../types';

export function usePaletteLibrary() {
  const palettes = useAppStore((state) => state.savedPalettes);
  const addPalette = useAppStore((state) => state.addPalette);
  const deletePalette = useAppStore((state) => state.removePalette);
  const clearPalettes = useAppStore((state) => state.clearPalettes);

  return {
    palettes,
    addPalette,
    deletePalette,
    clearPalettes,
  };
}