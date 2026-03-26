import { useToastStore } from '../systems/toastManager';
import { useCallback } from 'react';

interface ConfirmConfig {
  title: string;
  message: string;
  finalTitle?: string;
  finalMessage?: string;
  onConfirm: () => void;
}

export function useConfirmAction() {
  const pushToast = useToastStore((state) => state.pushToast);
  const dismissToast = useToastStore((state) => state.dismissToast);

  const requestConfirm = useCallback(({ title, message, finalTitle, finalMessage, onConfirm }: ConfirmConfig) => {
    const id = pushToast({
      variant: 'confirm',
      title,
      message,
      duration: 0,
      confirmText: 'Continue',
      cancelText: 'Cancel',
      onCancel: () => dismissToast(id),
      onConfirm: () => {
        dismissToast(id);
        const finalId = pushToast({
          variant: 'final-confirm',
          title: finalTitle || '🗑️ This cannot be undone.',
          message: finalMessage || 'Are you absolutely sure?',
          duration: 0,
          confirmText: 'Yes, do it',
          cancelText: 'Cancel',
          onCancel: () => dismissToast(finalId),
          onConfirm: () => {
            dismissToast(finalId);
            onConfirm();
          }
        });
      }
    });
  }, [pushToast, dismissToast]);

  return { requestConfirm };
}
