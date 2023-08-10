/* eslint-disable react/button-has-type */
import { CalendarPageFooter } from '@common/components/Footer';
import { CalendarPageNavigation } from '@common/components/Navigation';
import { SvgIcon } from '@common/components/SvgIcon';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Home = () => {
  return (
    <>
      <CalendarPageNavigation />
      <div>캘린더 영역</div>
      <StyledContainer>
        <div>
          <StyledDate>07</StyledDate>
          <StyledWord>DAY</StyledWord>
          <StyledDate>12</StyledDate>
          <StyledWord>RECORD</StyledWord>
        </div>
        <StyledRecordButton>
          <SvgIcon id='chevronDown2' />
        </StyledRecordButton>
      </StyledContainer>
      <CalendarPageFooter />
    </>
  );
};

// NOTE: Footer 쪽 스타일과 상당히 유사해서 하나의 컴포넌트로 뺄 수 있을 것 같음
const StyledContainer = styled.div`
  position: absolute;
  bottom: 0;
  padding-bottom: 6.8rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  width: calc(100% - 4.8rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledDate = styled.span`
  ${theme.font.bold32}
`;

const StyledWord = styled.span`
  ${theme.font.semibold16};
  color: ${theme.color.gray07};
`;

const StyledRecordButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white};
  border-radius: 10rem;
  width: 6.2rem;
  height: 6.2rem;
`;
export default Home;
