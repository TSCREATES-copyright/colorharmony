import { useAppStore } from '../state/store';
import { validateLicenseKey } from '../systems/licenseManager';
import { useToast } from './useToast';

export function useLicense() {
  const settings = useAppStore((state) => state.settings);
  const unlockPremium = useAppStore((state) => state.unlockPremium);
  const { success, error } = useToast();

  const isPremium = settings.premiumUnlocked;

  const activateLicense = (key: string) => {
    if (validateLicenseKey(key)) {
      unlockPremium();
      success('License Activated', 'Welcome to ColorHarmony Pro.');
      return true;
    } else {
      error('Invalid License', 'Please check your key and try again.');
      return false;
    }
  };

  return {
    isPremium,
    activateLicense,
  };
}
