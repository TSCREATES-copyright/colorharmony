import { PromptIntent, PromptDepth } from '../../systems/colorPromptTypes';
import { colorPromptTemplates } from '../../systems/colorPromptTemplates';

interface ColorPromptPresetPickerProps {
  intent: PromptIntent;
  setIntent: (intent: PromptIntent) => void;
  depth: PromptDepth;
  setDepth: (depth: PromptDepth) => void;
}

export function ColorPromptPresetPicker({
  intent,
  setIntent,
  depth,
  setDepth
}: ColorPromptPresetPickerProps) {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Prompt Intent</label>
        <select
          value={intent}
          onChange={(e) => setIntent(e.target.value as PromptIntent)}
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {colorPromptTemplates.map((template) => (
            <option key={template.id} value={template.id}>
              {template.title}
            </option>
          ))}
        </select>
        <p className="mt-1 text-xs text-gray-500">
          {colorPromptTemplates.find(t => t.id === intent)?.description}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Prompt Depth</label>
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setDepth('concise')}
            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors ${
              depth === 'concise' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Concise
          </button>
          <button
            onClick={() => setDepth('detailed')}
            className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors ${
              depth === 'detailed' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Detailed
          </button>
        </div>
      </div>
    </div>
  );
}
