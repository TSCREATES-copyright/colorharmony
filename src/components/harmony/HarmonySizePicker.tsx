import { useHarmonyEngine } from '../../hooks/useHarmonyEngine';
import { useHarmonyCatalog } from '../../hooks/useHarmonyCatalog';

export function HarmonySizePicker() {
  const { harmonyClass, size, setSize } = useHarmonyEngine();
  const { getDescriptor } = useHarmonyCatalog();

  const descriptor = getDescriptor(harmonyClass);

  if (!descriptor) return null;

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(parseInt(e.target.value, 10));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-700">Palette Size</label>
        <span className="text-sm font-mono text-gray-500">{size} Colors</span>
      </div>
      <input
        type="range"
        min={descriptor.minSize}
        max={descriptor.maxSize}
        value={size}
        onChange={handleSizeChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-xs text-gray-400">
        <span>{descriptor.minSize}</span>
        <span>{descriptor.maxSize}</span>
      </div>
    </div>
  );
}
