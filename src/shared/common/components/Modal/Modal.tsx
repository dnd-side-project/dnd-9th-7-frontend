import { PropsWithChildren, useMemo, createContext } from 'react';

import styled from '@emotion/styled';
import { Overlay } from '@/shared/common/components/Overlay';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const ModalContext = createContext<ModalProps>({
  open: false,
  onClose: () => {},
});

export const Modal = ({ children, open, onClose }: PropsWithChildren<ModalProps>) => {
  const modalValue = useMemo(() => ({ open, onClose }), [open, onClose]);
  return (
    <ModalContext.Provider value={modalValue}>
      <Overlay onClose={onClose}>
        <StyledContainer>{children}</StyledContainer>
      </Overlay>
    </ModalContext.Provider>
  );
};

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) => props.theme.font.bold20};
  margin-bottom: 1rem;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
`;

const StyledFooterButton = styled.button`
  ${(props) => props.theme.font.bold16};
  padding: 2rem 0;
`;

const StyledContent = styled.article`
  color: ${(props) => props.theme.color.gray07};
  ${(props) => props.theme.font.medium16};
  margin-bottom: 3.2rem;
`;

const StyledContainer = styled.article`
  position: relative;
  margin: auto;
  width: 26rem;
  padding: 3.2rem 3.4rem 0.8rem 3.4rem;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(38, 37, 40, 0.2);
`;

Modal.Header = StyledHeader;
Modal.Content = StyledContent;
Modal.Footer = StyledFooter;
Modal.Button = StyledFooterButton;
