import { HarmonyRule } from '../../types';
import { clsx } from 'clsx';

interface PresetSelectorProps {
  value: HarmonyRule;
  onChange: (rule: HarmonyRule) => void;
}

const RULES: { value: HarmonyRule; label: string; desc: string }[] = [
  { value: 'analogous', label: 'Analogous', desc: 'Adjacent hues' },
  { value: 'complementary', label: 'Complementary', desc: 'Opposite hues' },
  { value: 'triad', label: 'Triad', desc: 'Evenly spaced' },
  { value: 'tetrad', label: 'Tetrad', desc: 'Two complementary pairs' },
  { value: 'monochrome', label: 'Monochrome', desc: 'Single hue variations' },
];

export function PresetSelector({ value, onChange }: PresetSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      {RULES.map((rule) => (
        <button
          key={rule.value}
          onClick={() => onChange(rule.value)}
          className={clsx(
            'flex flex-col items-start p-3 rounded-lg border text-left transition-all',
            value === rule.value
              ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
          )}
        >
          <span className={clsx('text-sm font-medium', value === rule.value ? 'text-blue-900' : 'text-gray-900')}>
            {rule.label}
          </span>
          <span className={clsx('text-xs mt-0.5', value === rule.value ? 'text-blue-700' : 'text-gray-500')}>
            {rule.desc}
          </span>
        </button>
      ))}
    </div>
  );
}
