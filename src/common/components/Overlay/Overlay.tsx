/* eslint-disable react/require-default-props */
import type { PropsWithChildren } from 'react';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Portal } from '@/common/components/Portal';
import { useClickOutside } from '@/common/hooks';

interface Props {
  onClose?: () => void;
}

export const Overlay = ({ children, onClose }: PropsWithChildren<Props>) => {
  const ref = useClickOutside({ onClose });

  return (
    <Portal id='overlay'>
      <StyledOverlayBackground
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        ref={ref}
      >
        {children}
      </StyledOverlayBackground>
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
