import { Footer as RecordPageFooter } from '@/shared/common/components/Footer';
import { SvgIcon } from '@/shared/common/components/SvgIcon';

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
