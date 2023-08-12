import { Footer } from '@common/components/Footer';
import { SvgIcon } from '@common/components/SvgIcon';

export const RecordPageFooter = () => {
  return (
    <Footer>
      <Footer.Left>
        <SvgIcon id='musicLog' />
      </Footer.Left>
      <Footer.Right>
        <SvgIcon id='myPlaylist' />
      </Footer.Right>
    </Footer>
  );
};
