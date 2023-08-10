/* eslint-disable react/button-has-type */
import { CalendarPageFooter } from '@common/components/Footer';
import { CalendarPageNavigation } from '@common/components/Navigation';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Home = () => {
  return (
    <>
      <CalendarPageNavigation />
      <div>캘린더 영역</div>
      <div>
        <StyledDate>07</StyledDate>
        <StyledWord>DAY</StyledWord>
        <StyledDate>12</StyledDate>
        <StyledWord>RECORD</StyledWord>
      </div>
      <CalendarPageFooter />
    </>
  );
};

const StyledDate = styled.span`
  ${theme.font.bold32}
`;

const StyledWord = styled.span`
  ${theme.font.bold32}
`;
export default Home;
