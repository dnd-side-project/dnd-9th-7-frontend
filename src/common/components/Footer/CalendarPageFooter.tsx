import { Footer } from '@common/components/Footer';
import { SvgIcon } from '@common/components/SvgIcon';

export const CalendarPageFooter = () => {
  return (
    <Footer>
      <Footer.Left>
        <SvgIcon id='music_lounge_gray' />
      </Footer.Left>
      <Footer.Center>
        <SvgIcon id='music_log_white' />
      </Footer.Center>
      <Footer.Right>
        <SvgIcon id='my_playlist_gray' />
      </Footer.Right>
    </Footer>
  );
};
