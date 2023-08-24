import { Footer } from '@common/components/Footer';
import { SvgIcon } from '@common/components/SvgIcon';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const ViewRecordPageFooter = () => {
  return (
    <Footer>
      <Footer.Left>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SvgIcon id='active_white' size={12} />
          <StyledTitle>MUSIC</StyledTitle>
        </div>
      </Footer.Left>
      <Footer.Center>RECORD</Footer.Center>
      <Footer.Right>PLAY</Footer.Right>
    </Footer>
  );
};

const StyledTitle = styled.span`
  ${theme.font.semibold16}
`;
