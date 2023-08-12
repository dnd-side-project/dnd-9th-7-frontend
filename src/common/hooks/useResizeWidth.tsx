/* eslint-disable @typescript-eslint/no-shadow */
import { useEffect, useState } from 'react';

export const useResizeWidth = () => {
  const mainElement = document.querySelector('main');
  const mainWidth = mainElement?.offsetWidth; // 너비를 가져옴
  const [resizedWidth, setResizedWidth] = useState(mainWidth);

  useEffect(() => {
    function handleResize() {
      const mainWidth = document.querySelector('main')?.offsetWidth;
      setResizedWidth(mainWidth as number);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return resizedWidth;
};
