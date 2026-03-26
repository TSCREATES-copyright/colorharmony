// src/components/dashboard/LeftPanel.tsx
import { useAppStore } from '../../state/store';
import { ColorInput } from '../tools/ColorInput';
import { Button } from '../ui/Button';
import { checkUsageLimit, FREE_DAILY_LIMIT } from '../../systems/MonetizationManager';
import { useHarmonyEngine } from '../../hooks/useHarmonyEngine';
import { HarmonyClassPicker } from '../harmony/HarmonyClassPicker';
import { HarmonyVariantPicker } from '../harmony/HarmonyVariantPicker';
import { HarmonySizePicker } from '../harmony/HarmonySizePicker';
import { SavedPalettesPanel } from '../palette/SavedPalettesPanel';

export function LeftPanel() {
  const { baseColor, setBaseColor } = useHarmonyEngine();
  const toggleUpgradeModal = useAppStore((state) => state.toggleUpgradeModal);
  const settings = useAppStore((state) => state.settings);

  const handleGenerate = () => {
    const { allowed, newCount, newDate } = checkUsageLimit(
      settings.dailyUsageCount,
      settings.lastUsageDate,
      settings.premiumUnlocked
    );

    if (!allowed) {
      toggleUpgradeModal(true);
      return;
    }

    // Generate a random hex color
    const randomHex =
      '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setBaseColor(randomHex);

    useAppStore.setState((state) => ({
      settings: {
        ...state.settings,
        dailyUsageCount: newCount,
        lastUsageDate: newDate,
      },
    }));
  };

  return (
    <aside className="w-80 border-r border-gray-200 bg-white flex flex-col shrink-0 overflow-y-auto">
      <div className="p-6 flex flex-col gap-8">
        {/* Base Color Input */}
        <div data-tour="base-color">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
            Base Color 💠
          </h2>
          <ColorInput value={baseColor} onChange={setBaseColor} />
        </div>

        {/* Harmony System */}
        <div data-tour="harmony-rule">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
            Harmony System 🦋
          </h2>
          <HarmonyClassPicker />
        </div>

        {/* Variant & Size Pickers */}
        <div className="pt-4 border-t border-gray-100 flex flex-col gap-6">
          <HarmonyVariantPicker />
          <HarmonySizePicker />
        </div>

        {/* Generate Random Palette */}
        <div className="pt-4 border-t border-gray-100" data-tour="generate-random">
          <Button className="w-full" size="lg" onClick={handleGenerate}>
            Generate Random 🔄
          </Button>
          {!settings.premiumUnlocked && (
            <p className="text-xs text-center text-gray-500 mt-3">
              {FREE_DAILY_LIMIT - settings.dailyUsageCount} free generations left today 🎁
            </p>
          )}

          {/* 🔹 Insert Saved Palettes directly under Generate Random */}
          <div className="mt-4">
            <SavedPalettesPanel />
          </div>
        </div>
      </div>
    </aside>
  );
}