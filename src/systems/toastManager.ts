import { create } from 'zustand';
import { ToastPayload } from './toastTypes';

interface ToastStore {
  toasts: ToastPayload[];
  pushToast: (toast: Omit<ToastPayload, 'id'>) => string;
  dismissToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  pushToast: (toast) => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id }].slice(-5), // max 5
    }));
    return id;
  },
  dismissToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    }));
  },
}));
