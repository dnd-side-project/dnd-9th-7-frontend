import { Footer as RecordPageFooter } from '@common/components/Footer';
import { SvgIcon } from '@common/components/SvgIcon';

export const Footer = () => {
  return (
    <RecordPageFooter>
      <RecordPageFooter.Left>
        <SvgIcon id='trash' size={24} />
      </RecordPageFooter.Left>
      <RecordPageFooter.Right />
    </RecordPageFooter>
  );
};
