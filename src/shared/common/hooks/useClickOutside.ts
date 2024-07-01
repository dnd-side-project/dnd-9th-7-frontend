import { useEffect, useRef } from 'react';

interface Props {
  onClose?: () => void;
}

export const useClickOutside = <T extends HTMLElement = HTMLDivElement>({ onClose }: Props) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const clickModalOutside = (event: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      if (element === event.target) {
        onClose?.();
      }
    };
    document.addEventListener('pointerdown', clickModalOutside);
    return () => {
      document.removeEventListener('pointerdown', clickModalOutside);
    };
  }, [onClose]);

  return ref;
};
