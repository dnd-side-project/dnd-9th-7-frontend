import { Footer } from '@common/components/Footer';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const ViewRecordPageFooter = () => {
  return (
    <Footer>
      <Footer.Left>
        <StyledTitle>MUSIC</StyledTitle>
      </Footer.Left>
      <Footer.Center>RECORD</Footer.Center>
      <Footer.Right>PLAY</Footer.Right>
    </Footer>
  );
};

const StyledTitle = styled.span`
  ${theme.font.semibold16}
`;
