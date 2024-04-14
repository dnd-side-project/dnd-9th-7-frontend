import { create } from 'zustand';

type ToastType = {
  isOpened: boolean;
  message: string;
  canCancel: boolean;
};

interface ToastStoreType {
  toast: ToastType;
  showToast: ({
    message,
    canCancel,
  }: {
    message: ToastType['message'];
    canCancel?: ToastType['canCancel'];
  }) => void;
}

export const useToast = create<ToastStoreType>((set) => ({
  toast: { isOpened: false, message: '', canCancel: false },
  showToast: ({ message, canCancel = true }) => {
    set(() => ({ toast: { isOpened: true, message, canCancel } }));
    setTimeout(
      () => set(() => ({ toast: { isOpened: false, message: '', canCancel: false } })),
      3000,
    );
  },
}));
