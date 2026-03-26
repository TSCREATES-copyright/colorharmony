import { useHarmonyStore } from '../harmony/harmonyState';
import { useCallback } from 'react';

export function useHarmonyEngine() {
  const {
    baseColor,
    harmonyClass,
    variant,
    size,
    currentOutput,
    setBaseColor,
    setHarmonyClass,
    setVariant,
    setSize,
    generate,
    saveCurrent,
  } = useHarmonyStore();

  const handleBaseColorChange = useCallback((hex: string) => {
    setBaseColor(hex);
  }, [setBaseColor]);

  const handleClassChange = useCallback((id: string) => {
    setHarmonyClass(id as any);
  }, [setHarmonyClass]);

  const handleVariantChange = useCallback((id: string) => {
    setVariant(id as any);
  }, [setVariant]);

  const handleSizeChange = useCallback((newSize: number) => {
    setSize(newSize as any);
  }, [setSize]);

  return {
    baseColor,
    harmonyClass,
    variant,
    size,
    currentOutput,
    setBaseColor: handleBaseColorChange,
    setHarmonyClass: handleClassChange,
    setVariant: handleVariantChange,
    setSize: handleSizeChange,
    generate,
    saveCurrent,
  };
}
