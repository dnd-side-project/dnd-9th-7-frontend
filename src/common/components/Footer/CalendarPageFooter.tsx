import { Footer } from '@common/components/Footer';
import { SvgIcon } from '@common/components/SvgIcon';

export const CalendarPageFooter = () => {
  return (
    <Footer>
      <Footer.Left>
        <SvgIcon id='musicLog' />
      </Footer.Left>
      <Footer.Center>
        <SvgIcon id='musicLounge' />
      </Footer.Center>
      <Footer.Right>
        <SvgIcon id='myPlaylist' />
      </Footer.Right>
    </Footer>
  );
};
