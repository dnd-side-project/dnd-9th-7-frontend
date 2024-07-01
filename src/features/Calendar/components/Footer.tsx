import { Footer as CalendarPageFooter } from '@/shared/common/components/Footer';
import { SvgIcon } from '@/shared/common/components/SvgIcon';

const Footer = () => {
  return (
    <CalendarPageFooter>
      <CalendarPageFooter.Left>
        <SvgIcon id='music_lounge_gray' />
      </CalendarPageFooter.Left>
      <CalendarPageFooter.Center>
        <SvgIcon id='music_log_white' />
      </CalendarPageFooter.Center>
      <CalendarPageFooter.Right>
        <SvgIcon id='my_playlist_gray' />
      </CalendarPageFooter.Right>
    </CalendarPageFooter>
  );
};

export default Footer;
