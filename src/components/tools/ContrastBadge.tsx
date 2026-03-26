import { getContrastScore } from '../../utils/contrast';
import { clsx } from 'clsx';

interface ContrastBadgeProps {
  ratio: number;
  bg: 'white' | 'black';
}

export function ContrastBadge({ ratio, bg }: ContrastBadgeProps) {
  const score = getContrastScore(ratio);
  const isPass = score !== 'Fail';

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
        on {bg}
      </span>
      <div className={clsx(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border',
        isPass ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
      )}>
        {ratio.toFixed(2)} : 1 ({score})
      </div>
    </div>
  );
}
