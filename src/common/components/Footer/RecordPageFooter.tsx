import { Footer } from '@common/components/Footer';
import { SvgIcon } from '@common/components/SvgIcon';

export const RecordPageFooter = () => {
  return (
    <Footer>
      <Footer.Left>
        <SvgIcon id='trash' size={24} />
      </Footer.Left>
      <Footer.Right />
    </Footer>
  );
};
