/* eslint-disable react/button-has-type */
import { CalendarPageFooter } from '@common/components/Footer';
import { CalendarPageNavigation } from '@common/components/Navigation';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { useNavigate } from 'react-router-dom';
import { Spacing } from '@common/components/Spacing';
import { SvgIcon } from '@common/components/SvgIcon';

const Home = () => {
  const navigation = useNavigate();
  return (
    <>
      <CalendarPageNavigation />
      <StyledContainer>
        <Spacing size={3} />
        <div>
          <StyledDate>07</StyledDate>
          <StyledWord>DAY</StyledWord>
          <StyledDate>12</StyledDate>
          <StyledWord>RECORD</StyledWord>
        </div>
        <StyledRecordButton onClick={() => navigation('/record')}>
          <SvgIcon id='blackPlus' size={18} />
        </StyledRecordButton>
      </StyledContainer>
      <CalendarPageFooter css={{ position: 'absolute' }} />
    </>
  );
};

const StyledContainer = styled.div`
  padding-bottom: 6.8rem;
  width: 100%;
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
