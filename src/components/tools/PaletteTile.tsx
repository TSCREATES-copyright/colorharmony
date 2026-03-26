import { PaletteSwatch } from '../../types';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export function PaletteTile({ swatch }: { swatch: PaletteSwatch }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(swatch.hex.toUpperCase());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isLight = swatch.hsl[2] > 60;
  const textColor = isLight ? 'text-gray-900' : 'text-white';
  const iconColor = isLight ? 'text-gray-900/50 hover:text-gray-900' : 'text-white/50 hover:text-white';

  return (
    <div 
      className="flex-1 min-w-[120px] rounded-2xl flex flex-col justify-end p-6 relative group transition-transform hover:-translate-y-1 shadow-sm hover:shadow-md"
      style={{ backgroundColor: swatch.hex }}
    >
      <button
        onClick={handleCopy}
        className={`absolute top-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all ${iconColor} bg-black/5 hover:bg-black/10`}
        title="Copy HEX"
      >
        <Copy className="w-4 h-4" />
      </button>

      <div className={`flex flex-col gap-1 ${textColor}`}>
        <span className="text-sm font-semibold tracking-tight">{swatch.name}</span>
        <span className="text-xs font-mono opacity-80 uppercase">{swatch.hex}</span>
      </div>

      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl backdrop-blur-sm transition-all">
          <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            Copied!
          </span>
        </div>
      )}
    </div>
  );
}
