import { useState } from 'react';
import { useAppStore } from '../../state/store';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Check, Key } from 'lucide-react';
import { useLicense } from '../../hooks/useLicense';

export function LicenseModal() {
  const isOpen = useAppStore((state) => state.isUpgradeModalOpen);
  const toggleModal = useAppStore((state) => state.toggleUpgradeModal);
  const { activateLicense } = useLicense();
  const [licenseKey, setLicenseKey] = useState('');

  const handleActivate = () => {
    const success = activateLicense(licenseKey);
    if (success) {
      toggleModal(false);
      setLicenseKey('');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={() => toggleModal(false)} title="🗝️ Unlock ColorHarmony™ Pro">
      <div className="flex flex-col gap-6">
        <p className="text-gray-600 text-sm leading-relaxed">
          ⚠️ You've reached your daily limit for free palette generations. Unlock Pro for unlimited access and advanced features.⚠️ 
        </p>
        
        <ul className="space-y-3">
          {[
            'Unlimited palette generation ♾️',
            'Unlimited saved palettes ♾️' ,
            'Export to CSS variables 📂',
            'Generate AI ColorPrompts ֎, ✨, ✴️',
            'Advanced contrast analysis 📊',
            'Palette Lab Simulator 🎨'
          ].map((feature, i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-blue-600" />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                value={licenseKey}
                onChange={(e) => setLicenseKey(e.target.value)}
                placeholder="Enter License Key (e.g. CH-PRO-...)"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <Button onClick={handleActivate} disabled={!licenseKey.trim()}>
              Activate
            </Button>
          </div>
          <p className="text-xs text-center text-gray-400 mt-2">
            💳 One-time payment. Works entirely offline in your browser.
          </p>
        </div>
      </div>
    </Modal>
  );
}
