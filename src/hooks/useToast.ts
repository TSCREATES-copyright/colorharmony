import { useToastStore } from '../systems/toastManager';

export function useToast() {
  const pushToast = useToastStore((state) => state.pushToast);
  const dismissToast = useToastStore((state) => state.dismissToast);

  return {
    success: (title: string, message?: string) => pushToast({ variant: 'success', title, message, duration: 3000 }),
    info: (title: string, message?: string) => pushToast({ variant: 'info', title, message, duration: 3000 }),
    warning: (title: string, message?: string) => pushToast({ variant: 'warning', title, message, duration: 4000 }),
    error: (title: string, message?: string) => pushToast({ variant: 'error', title, message, duration: 5000 }),
    dismiss: dismissToast,
  };
}
