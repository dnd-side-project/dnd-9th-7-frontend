import { create } from 'zustand';
import { ReactNode } from 'react';
import { IconIdType } from '@/common/components/SvgIcon';

type ToastType = {
  isOpened: boolean;
  iconId?: IconIdType;
  message: ReactNode | string;
  onCancel?: () => void;
  bottomPosition: number;
};

interface ToastStoreType {
  toast: ToastType;
  showToast: ({
    iconId,
    message,
    onCancel,
    bottomPosition,
  }: {
    iconId?: ToastType['iconId'];
    message: ToastType['message'];
    onCancel?: ToastType['onCancel'];
    bottomPosition: ToastType['bottomPosition'];
  }) => void;
}

export const useToast = create<ToastStoreType>((set) => ({
  toast: { isOpened: false, message: null, bottomPosition: 0 },
  showToast: ({ iconId, message, onCancel, bottomPosition }) => {
    set(() => ({ toast: { isOpened: true, iconId, message, onCancel, bottomPosition } }));
    setTimeout(
      () =>
        set(() => ({
          toast: { isOpened: false, message: null, bottomPosition: 0 },
        })),
      3000,
    );
  },
}));
