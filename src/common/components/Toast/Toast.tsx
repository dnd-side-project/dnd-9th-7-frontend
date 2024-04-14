import styled from '@emotion/styled';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SvgIcon } from '@/common/components/SvgIcon';
import { useToast } from '@/stores/toast';

export const Toast = () => {
  const { toast } = useToast();

  const toastVariants = {
    invisible: {
      opacity: 0,
      bottom: '15rem',
    },
    visible: {
      opacity: 1,
      bottom: '16rem',
    },
    exit: {
      opacity: 0,
      bottom: '15rem',
    },
  };

  const content = (
    <AnimatePresence>
      {toast.isOpened && (
        <StyledToast variants={toastVariants} initial='invisible' animate='visible' exit='exit'>
          <StyledIcon>
            <SvgIcon id='complete_white' />
          </StyledIcon>
          <StyledMessage>{toast.message}</StyledMessage>
          {toast.canCancel && <StyledCancel>실행취소</StyledCancel>}
        </StyledToast>
      )}
    </AnimatePresence>
  );
  const el = document.getElementById('toast');
  if (!el) return null;
  return createPortal(content, el);
};

const StyledToast = styled(motion.div)`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  width: calc(100% - 4.8rem);
  height: 7.2rem;
  background-color: ${(props) => props.theme.color.transparency05};
  backdrop-filter: blur(1rem);
  border: 0.5px solid rgba(255, 255, 255, 0.15);
  z-index: 100;
  @media screen and (min-width: 390px) {
    max-width: 34.2rem;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;

const StyledMessage = styled.div`
  ${(props) => props.theme.font.medium16}
  color: ${(props) => props.theme.color.white};
  flex-grow: 1;
`;

const StyledCancel = styled.div`
  ${(props) => props.theme.font.semibold16}
  color: ${(props) => props.theme.color.orange};
  display: flex;
  justify-content: center;
  width: 30%;
`;
