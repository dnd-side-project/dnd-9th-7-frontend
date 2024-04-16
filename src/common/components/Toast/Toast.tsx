import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { SvgIcon } from '@/common/components/SvgIcon';
import { useToast } from '@/stores/toast';
import { Portal } from '@/common/components/Portal';

export const Toast = () => {
  const {
    toast: { isOpened, iconId, message, onCancel, bottomPosition },
  } = useToast();

  const toastVariants = {
    invisible: {
      opacity: 0,
      bottom: bottomPosition && `${bottomPosition - 1}rem`,
    },
    visible: {
      opacity: 1,
      bottom: bottomPosition && `${bottomPosition}rem`,
    },
    exit: {
      opacity: 0,
      bottom: bottomPosition && `${bottomPosition - 1}rem`,
    },
  };

  return (
    <Portal id='toast'>
      <AnimatePresence>
        {isOpened && (
          <StyledToast variants={toastVariants} initial='invisible' animate='visible' exit='exit'>
            {iconId && (
              <StyledIcon>
                <SvgIcon id={iconId} />
              </StyledIcon>
            )}
            <StyledMessage>{message}</StyledMessage>
            {onCancel && <StyledCancel onClick={onCancel}>실행취소</StyledCancel>}
          </StyledToast>
        )}
      </AnimatePresence>
    </Portal>
  );
};

const StyledToast = styled(motion.div)`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 4.8rem);
  height: 7.2rem;
  background-color: ${(props) => props.theme.color.transparency05};
  backdrop-filter: blur(1rem);
  border: 0.5px solid rgba(255, 255, 255, 0.15);
  padding: 0 2rem;
  box-sizing: border-box;
  z-index: 99;
  @media screen and (min-width: 390px) {
    max-width: 34.2rem;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 1rem;
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
`;
