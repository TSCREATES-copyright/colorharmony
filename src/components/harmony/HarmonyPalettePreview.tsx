import { useHarmonyEngine } from '../../hooks/useHarmonyEngine';
import { OutputPaletteItem } from '../../harmony/harmonyTypes';

export function HarmonyPalettePreview() {
  const { currentOutput } = useHarmonyEngine();

  if (!currentOutput) return null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end mb-2">
        <h2 className="text-xl font-semibold text-gray-900">Generated Palette</h2>
        <div className="text-sm text-gray-500">
          {currentOutput.items.length} Colors
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {currentOutput.items.map((item: OutputPaletteItem) => (
          <div key={item.id} className="flex flex-col gap-2 group">
            <div 
              className="w-full aspect-square rounded-2xl shadow-sm border border-gray-200 transition-transform group-hover:scale-105"
              style={{ backgroundColor: item.hex }}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 truncate">{item.name}</span>
              <span className="text-xs text-gray-500 font-mono">{item.hex.toUpperCase()}</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">{item.role}</span>
            </div>
          </div>
        ))}
      </div>

      {currentOutput.warnings.length > 0 && (
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <h3 className="text-sm font-semibold text-amber-800 mb-2">Accessibility Warnings</h3>
          <ul className="list-disc pl-5 text-sm text-amber-700 space-y-1">
            {currentOutput.warnings.map((warning, i) => (
              <li key={i}>{warning}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
