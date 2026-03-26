import { useHarmonyEngine } from '../../hooks/useHarmonyEngine';
import { useHarmonyCatalog } from '../../hooks/useHarmonyCatalog';
import { HarmonyVariantId } from '../../harmony/harmonyTypes';

export function HarmonyVariantPicker() {
  const { harmonyClass, variant, setVariant } = useHarmonyEngine();
  const { getDescriptor } = useHarmonyCatalog();

  const descriptor = getDescriptor(harmonyClass);

  if (!descriptor) return null;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">Variant</label>
      <div className="flex flex-wrap gap-2">
        {descriptor.supportedVariants.map((v) => (
          <button
            key={v}
            onClick={() => setVariant(v as HarmonyVariantId)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              variant === v
                ? 'bg-gray-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
