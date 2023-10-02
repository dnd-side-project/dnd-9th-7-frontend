/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SvgIcon } from '@common/components/SvgIcon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Calendar, RecordList, Footer, Navigation } from '@features/Calendar/components';
import { theme } from '@styles/theme';

const Home = () => {
  const [isRecordListShown, setIsRecordListShown] = useState(false);
  return (
    <>
      <Navigation />
      <Calendar setIsRecordListShown={setIsRecordListShown} />
      <RecordList isRecordListShown={isRecordListShown} />
      <StyledContainer>
        <div
          css={css`
            visibility: ${isRecordListShown ? 'hidden' : 'visible'};
          `}
        >
          <StyledDate>07</StyledDate>
          <StyledWord
            css={css`
              margin-right: 1.2rem;
            `}
          >
            DAY
          </StyledWord>
          <StyledDate>12</StyledDate>
          <StyledWord>RECORD</StyledWord>
        </div>

        <StyledRecordButton>
          <StyledAlert>
            <div>ADD RECORD</div>
            <StyledCloseButton>
              <SvgIcon id='close_white_bold' size={8} />
            </StyledCloseButton>
            <StyledAlertArrow>
              <SvgIcon id='alert_arrow_orange' size={15} />
            </StyledAlertArrow>
          </StyledAlert>

          <Link to='/record'>
            <SvgIcon id='plus_black' />
          </Link>
        </StyledRecordButton>
      </StyledContainer>
      <Footer />
    </>
  );
};

// NOTE: Footer 쪽 스타일과 상당히 유사해서 하나의 컴포넌트로 뺄 수 있을 것 같음
const StyledContainer = styled.div`
  position: fixed;
  bottom: 8.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  width: calc(100% - 4.8rem);
  max-width: 35.2rem;
`;
const StyledDate = styled.span`
  ${theme.font.bold32}
`;

const StyledWord = styled.span`
  ${theme.font.semibold16};
  color: ${theme.color.gray07};
`;

const StyledRecordButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white};
  border-radius: 10rem;
  width: 6.2rem;
  height: 6.2rem;
`;

const StyledAlert = styled.div`
  position: absolute;
  top: -6.5rem;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13rem;
  height: 3.6rem;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.color.orange};
  ${(props) => props.theme.font.semibold14}
`;

const StyledCloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  aspect-ratio: 1/1;
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 100%;
`;

const StyledAlertArrow = styled.div`
  position: absolute;
  bottom: -2.1rem;
  right: 2.3rem;
`;

export default Home;
