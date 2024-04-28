/* eslint-disable react/require-default-props */
import type { PropsWithChildren } from 'react';

import styled from '@emotion/styled';
import { Portal } from '@/common/components/Portal';
import { useClickOutside } from '@/common/hooks';

interface Props {
  onClose?: () => void;
}

export const Overlay = ({ children, onClose }: PropsWithChildren<Props>) => {
  const ref = useClickOutside({ onClose });

  return (
    <Portal id='overlay'>
      <StyledOverlayBackground ref={ref}>{children}</StyledOverlayBackground>
    </Portal>
  );
};

const StyledOverlayBackground = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
