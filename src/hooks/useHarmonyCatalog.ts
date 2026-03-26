import { HARMONY_CATALOG } from '../harmony/harmonyCatalog';
import { HarmonyClassId, HarmonyClassDescriptor } from '../harmony/harmonyTypes';

export function useHarmonyCatalog() {
  const getDescriptor = (id: HarmonyClassId): HarmonyClassDescriptor | undefined => {
    return HARMONY_CATALOG.find(c => c.id === id);
  };

  const getClassesByTag = (tag: string): HarmonyClassDescriptor[] => {
    return HARMONY_CATALOG.filter(c => c.tags.includes(tag));
  };

  const getAllClasses = (): HarmonyClassDescriptor[] => {
    return HARMONY_CATALOG;
  };

  return {
    catalog: HARMONY_CATALOG,
    getDescriptor,
    getClassesByTag,
    getAllClasses,
  };
}
