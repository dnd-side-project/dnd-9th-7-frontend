import { create } from 'zustand';
import { ReactNode } from 'react';
import { IconIdType } from '@/shared/common/components/SvgIcon';

type BottomSheetType = {
  isOpened: boolean;
  menuList: { iconId: IconIdType; text: ReactNode; handleClick: () => void }[] | null;
};

interface BotttomSheetStoreType {
  bottomSheet: BottomSheetType;
  openBottomSheet: ({ menuList }: { menuList: BottomSheetType['menuList'] }) => void;
  closeBottomSheet: () => void;
}

export const useBottomSheet = create<BotttomSheetStoreType>((set) => ({
  bottomSheet: {
    isOpened: false,
    menuList: null,
  },
  openBottomSheet: ({ menuList }) => {
    set(() => ({ bottomSheet: { isOpened: true, menuList } }));
  },
  closeBottomSheet: () => {
    set((prev) => ({ bottomSheet: { ...prev.bottomSheet, isOpened: false } }));
    setTimeout(() => {
      set((prev) => ({ bottomSheet: { ...prev.bottomSheet, menuList: null } }));
    }, 100);
  },
}));
