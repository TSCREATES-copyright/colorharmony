import { useHarmonyCatalog } from '../../hooks/useHarmonyCatalog';
import { useHarmonyEngine } from '../../hooks/useHarmonyEngine';
import { HarmonyClassId } from '../../harmony/harmonyTypes';
import { Search } from 'lucide-react';
import { useState } from 'react';

export function HarmonyClassPicker() {
  const { catalog } = useHarmonyCatalog();
  const { harmonyClass, setHarmonyClass } = useHarmonyEngine();
  const [search, setSearch] = useState('');

  const filteredCatalog = catalog.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search harmony classes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {filteredCatalog.map((descriptor) => (
          <button
            key={descriptor.id}
            onClick={() => setHarmonyClass(descriptor.id as HarmonyClassId)}
            className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
              harmonyClass === descriptor.id
                ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="font-medium text-sm text-gray-900 mb-1">{descriptor.name}</div>
            <div className="text-xs text-gray-500 line-clamp-2">{descriptor.description}</div>
            <div className="flex flex-wrap gap-1 mt-2">
              {descriptor.tags.slice(0, 2).map(tag => (
                <span key={tag} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-medium uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
        {filteredCatalog.length === 0 && (
          <div className="col-span-full py-8 text-center text-sm text-gray-500">
            No harmony classes found matching "{search}"
          </div>
        )}
      </div>
    </div>
  );
}
