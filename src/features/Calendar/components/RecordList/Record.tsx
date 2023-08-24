import { SvgIcon } from '@common/components/SvgIcon';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Record = () => {
  const [isBottomSheetShown, setIsBottomSheetShown] = useState(false);

  const showBottomSheet = () => {
    setIsBottomSheetShown(true);
  };

  const hideBottomSheet = () => {
    setIsBottomSheetShown(false);
  };

  useEffect(() => {
    if (document) {
      document.body.style.overflow = isBottomSheetShown ? 'hidden' : 'auto';
    }
  }, [isBottomSheetShown]);
  return (
    <>
      <StyledRecord>
        <StyledRecordImage />
        <div>
          <StyledRecordTitle>WONDERWALL</StyledRecordTitle>
          <StyledRecordArtist>OASIS</StyledRecordArtist>
        </div>

        <StyledEditButton>
          <SvgIcon id='edit_vertical_white' onClick={() => showBottomSheet()} />
        </StyledEditButton>
      </StyledRecord>

      <AnimatePresence>
        {isBottomSheetShown && (
          <StyledContainer>
            <StyledOverlay onClick={() => hideBottomSheet()} />
            <StyledBottomSheet
              variants={bottomSheetVariants}
              initial='invisible'
              animate='visible'
              exit='exit'
            >
              <StyledBar />

              <StyledMenu>
                <SvgIcon id='photo_black' />
                <StyledText color='black'>대표 이미지로 설정하기</StyledText>
              </StyledMenu>
              <StyledMenu>
                <SvgIcon id='trash_red' />
                <StyledText color='red'>기록 삭제하기</StyledText>
              </StyledMenu>
            </StyledBottomSheet>
          </StyledContainer>
        )}
      </AnimatePresence>
    </>
  );
};

const StyledRecord = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 1rem;
  background-color: ${(props) => props.theme.color.black};
  border-top: 1px solid ${(props) => props.theme.color.gray08};
`;

const StyledRecordImage = styled.div`
  width: 6.4rem;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.theme.color.gray11};
  margin-right: 1.6rem;
`;

const StyledRecordTitle = styled.div`
  ${(props) => props.theme.font.bold16}
`;

const StyledRecordArtist = styled.div`
  ${(props) => props.theme.font.medium14}
  color: ${(props) => props.theme.color.gray08};
`;

const StyledEditButton = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

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

export default Record;
