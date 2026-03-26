import { useState, useEffect, KeyboardEvent } from 'react';
import { isValidHex } from '../../utils/color';

interface ColorInputProps {
  value: string;
  onChange: (hex: string) => void;
}

export function ColorInput({ value, onChange }: ColorInputProps) {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleBlur = () => {
    let formatted = localValue.trim();
    if (!formatted.startsWith('#')) formatted = '#' + formatted;
    
    if (isValidHex(formatted)) {
      onChange(formatted);
      setLocalValue(formatted);
    } else {
      setLocalValue(value); // Revert on invalid
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') handleBlur();
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-lg border border-gray-200 overflow-hidden shrink-0 shadow-sm">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="absolute -inset-2 w-16 h-16 cursor-pointer"
          />
        </div>
        <input
          type="text"
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="flex-1 h-12 px-4 rounded-lg border border-gray-200 text-gray-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
          placeholder="#000000"
        />
      </div>
    </div>
  );
}
