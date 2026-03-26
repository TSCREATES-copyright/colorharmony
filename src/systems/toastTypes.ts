export type ToastVariant = 'success' | 'info' | 'warning' | 'error' | 'confirm' | 'final-confirm';

export interface ToastPayload {
  id: string;
  variant: ToastVariant;
  title: string;
  message?: string;
  duration?: number; // 0 means persistent
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}
