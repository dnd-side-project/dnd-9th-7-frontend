/* eslint-disable react/require-default-props */
import type { PropsWithChildren } from 'react';

import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { Portal } from '@/shared/common/components/Portal';
import { useClickOutside } from '@/shared/common/hooks';

interface Props {
  onClose?: () => void;
}

export const Overlay = ({ children, onClose }: PropsWithChildren<Props>) => {
  const ref = useClickOutside({ onClose });

  return (
    <Portal id='overlay'>
      <AnimatePresence>
        <StyledOverlayBackground
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 1 }}
          ref={ref}
        >
          {children}
        </StyledOverlayBackground>
      </AnimatePresence>
    </Portal>
  );
};

const StyledOverlayBackground = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
