import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { HarmonyClassId, HarmonyVariantId, PaletteSize, HarmonyInput, HarmonyOutput } from './harmonyTypes';
import { generateHarmony } from './harmonyEngine';
import { HARMONY_CATALOG } from './harmonyCatalog';

interface HarmonyState {
  // Current Input State
  baseColor: string;
  harmonyClass: HarmonyClassId;
  variant: HarmonyVariantId;
  size: PaletteSize;

  // Current Output State
  currentOutput: HarmonyOutput | null;

  // History / Saved
  history: HarmonyOutput[];
  savedPalettes: HarmonyOutput[];

  // Actions
  setBaseColor: (hex: string) => void;
  setHarmonyClass: (id: HarmonyClassId) => void;
  setVariant: (id: HarmonyVariantId) => void;
  setSize: (size: PaletteSize) => void;
  generate: () => void;
  saveCurrent: () => void;
  removeSaved: (id: string) => void;
  clearHistory: () => void;
}

export const useHarmonyStore = create<HarmonyState>()(
  persist(
    (set, get) => ({
      baseColor: '#3B82F6', // Default blue
      harmonyClass: 'analogous',
      variant: 'standard',
      size: 5,

      currentOutput: null,
      history: [],
      savedPalettes: [],

      setBaseColor: (hex) => {
        set({ baseColor: hex });
        get().generate();
      },
      setHarmonyClass: (id) => {
        const descriptor = HARMONY_CATALOG.find(c => c.id === id);
        if (descriptor) {
          // Ensure variant and size are valid for the new class
          let newVariant = get().variant;
          if (!descriptor.supportedVariants.includes(newVariant)) {
            newVariant = descriptor.defaultVariant;
          }

          let newSize = get().size;
          if (newSize < descriptor.minSize) newSize = descriptor.minSize;
          if (newSize > descriptor.maxSize) newSize = descriptor.maxSize;

          set({ harmonyClass: id, variant: newVariant, size: newSize });
          get().generate();
        }
      },
      setVariant: (id) => {
        set({ variant: id });
        get().generate();
      },
      setSize: (size) => {
        set({ size });
        get().generate();
      },
      generate: () => {
        const { baseColor, harmonyClass, variant, size, history } = get();
        
        try {
          const input: HarmonyInput = { baseColor, harmonyClass, variant, size };
          const output = generateHarmony(input);

          // Keep history limited to last 50
          const newHistory = [output, ...history].slice(0, 50);

          set({ currentOutput: output, history: newHistory });
        } catch (error) {
          console.error("Failed to generate harmony:", error);
        }
      },
      saveCurrent: () => {
        const { currentOutput, savedPalettes } = get();
        if (currentOutput) {
          // Check if already saved
          if (!savedPalettes.find(p => p.id === currentOutput.id)) {
            set({ savedPalettes: [currentOutput, ...savedPalettes] });
          }
        }
      },
      removeSaved: (id) => {
        set(state => ({
          savedPalettes: state.savedPalettes.filter(p => p.id !== id)
        }));
      },
      clearHistory: () => {
        set({ history: [] });
      }
    }),
    {
      name: 'harmony-storage',
      partialize: (state) => ({
        baseColor: state.baseColor,
        harmonyClass: state.harmonyClass,
        variant: state.variant,
        size: state.size,
        savedPalettes: state.savedPalettes,
      }), // Only persist these fields
    }
  )
);
