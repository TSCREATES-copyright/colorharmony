import { useEffect } from 'react';
import { ToastPayload } from './toastTypes';
import { useToastStore } from './toastManager';
import { CheckCircle, Info, AlertTriangle, XCircle, AlertOctagon, X } from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from '../components/ui/Button';

const icons = {
  success: <CheckCircle className="w-5 h-5 text-green-500" />,
  info: <Info className="w-5 h-5 text-blue-500" />,
  warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
  error: <XCircle className="w-5 h-5 text-red-500" />,
  confirm: <AlertTriangle className="w-5 h-5 text-orange-500" />,
  'final-confirm': <AlertOctagon className="w-5 h-5 text-red-600" />,
};

export function ToastDisplay({ toast }: { toast: ToastPayload }) {
  const dismissToast = useToastStore((state) => state.dismissToast);

  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => dismissToast(toast.id), toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast, dismissToast]);

  const isConfirm = toast.variant === 'confirm' || toast.variant === 'final-confirm';

  return (
    <div className={clsx(
      "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all",
      toast.variant === 'final-confirm' && "ring-2 ring-red-500"
    )}>
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">{icons[toast.variant]}</div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-gray-900">{toast.title}</p>
            {toast.message && <p className="mt-1 text-sm text-gray-500">{toast.message}</p>}
            
            {isConfirm && (
              <div className="mt-3 flex gap-2">
                <Button size="sm" variant={toast.variant === 'final-confirm' ? 'default' : 'secondary'} className={toast.variant === 'final-confirm' ? 'bg-red-600 hover:bg-red-700 text-white' : ''} onClick={toast.onConfirm}>
                  {toast.confirmText || 'Confirm'}
                </Button>
                <Button size="sm" variant="ghost" onClick={toast.onCancel}>
                  {toast.cancelText || 'Cancel'}
                </Button>
              </div>
            )}
          </div>
          {!isConfirm && (
            <div className="ml-4 flex flex-shrink-0">
              <button
                type="button"
                className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => dismissToast(toast.id)}
              >
                <span className="sr-only">Close</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
