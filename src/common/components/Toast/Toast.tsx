import { SvgIcon } from '@common/components/SvgIcon';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

interface Props {
  isToast: boolean;
  closeToast: () => void;
}

export const Toast = ({ isToast, closeToast }: Props) => {
  useEffect(() => {
    if (isToast) {
      setTimeout(closeToast, 3000);
    }
  }, [isToast, closeToast]);
  return (
    <AnimatePresence>
      {isToast && (
        <StyledToast variants={toastVariants} initial='invisible' animate='visible' exit='exit'>
          <StyledIcon>
            <SvgIcon id='complete_black' />
          </StyledIcon>
          <StyledAlert>기록이 삭제되었습니다.</StyledAlert>
          <StyledDelete>실행취소</StyledDelete>
        </StyledToast>
      )}
    </AnimatePresence>
  );
};

const StyledToast = styled(motion.div)`
  position: absolute;
  bottom: 35rem;
  display: flex;
  align-items: center;
  width: calc(100% - 4.8rem);
  height: 7.2rem;
  background-color: rgba(68, 68, 68, 0.5);
  backdrop-filter: blur(1rem);
  border: 0.5px solid rgba(255, 255, 255, 0.15);
  z-index: 100;
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 15%;
`;

const StyledAlert = styled.div`
  ${(props) => props.theme.font.medium16}
  flex-grow: 1;
`;

const StyledDelete = styled.div`
  ${(props) => props.theme.font.semibold16}
  color: ${(props) => props.theme.color.orange};
  display: flex;
  justify-content: center;
  width: 30%;
`;

const toastVariants = {
  invisible: {
    transform: 'translateY(1rem)',
    opacity: 0,
  },
  visible: {
    transform: 'translateY(0)',
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    transform: 'translateY(1rem)',
    opacity: 0,
  },
};
