import { useToastStore } from './toastManager';
import { ToastDisplay } from './ToastDisplay';
import { motion, AnimatePresence } from 'motion/react';

export function ToastUI() {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 z-[100] flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-sm"
            >
              <ToastDisplay toast={toast} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
