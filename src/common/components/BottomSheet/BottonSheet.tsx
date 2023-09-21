import { useEffect, MouseEventHandler } from 'react';
import type { IconIdType } from '@common/components/SvgIcon';
import { SvgIcon } from '@common/components/SvgIcon';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  open: boolean;
  onClose: MouseEventHandler<HTMLElement>;
  menuList: { id: number; iconId: IconIdType; text: string }[];
}

const BottomSheet = ({ open, onClose, menuList }: Props) => {
  useEffect(() => {
    if (document) {
      document.body.style.overflow = open ? 'hidden' : 'auto';
    }
  }, [open]);
  return (
    <AnimatePresence>
      {open && (
        <StyledContainer>
          <StyledOverlay onClick={onClose} />
          <StyledBottomSheet
            variants={bottomSheetVariants}
            initial='invisible'
            animate='visible'
            exit='exit'
          >
            <StyledBar />

            {menuList.map((menu) => (
              <StyledMenu key={menu.id}>
                <SvgIcon id={menu.iconId} />
                <StyledText color='black'>{menu.text}</StyledText>
              </StyledMenu>
            ))}
          </StyledBottomSheet>
        </StyledContainer>
      )}
    </AnimatePresence>
  );
};

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;

const StyledOverlay = styled.div`
  height: calc(100% - 14.4rem);
`;

const StyledBottomSheet = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  height: 14.4rem;
  background-color: ${(props) => props.theme.color.white};
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding-right: 2.2rem;
  padding-left: 2.2rem;
`;

const StyledBar = styled.div`
  width: 4.6rem;
  height: 0.4rem;
  flex-shrink: 0;
  border-radius: 10rem;
  background-color: rgba(0, 0, 0, 0.25);
  margin-top: 0.8rem;
  margin-bottom: 1.6rem;
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5.8rem;
`;

const StyledText = styled.div<{ color: string }>`
  margin-left: 0.8rem;
  color: ${(props) => (props.color === 'black' ? props.theme.color.black : props.theme.color.red)};
  ${(props) => props.theme.font.semibold16}
`;

const bottomSheetVariants = {
  invisible: {
    transform: 'translateY(14.4rem)',
  },
  visible: {
    transform: 'translateY(0)',
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    transform: 'translateY(14.4rem)',
  },
};

export default BottomSheet;
