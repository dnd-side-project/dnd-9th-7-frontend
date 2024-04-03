import { Navigation as RecordPageNavigation } from '@/common/components/Navigation';
import { SvgIcon } from '@/common/components/SvgIcon';

export const Navigation = () => {
  return (
    <RecordPageNavigation>
      <RecordPageNavigation.Left>
        <SvgIcon id='leftArrow' />
      </RecordPageNavigation.Left>
      <RecordPageNavigation.Center>
        <span>기록하기</span>
      </RecordPageNavigation.Center>
      <RecordPageNavigation.Right>
        <span>완료</span>
      </RecordPageNavigation.Right>
    </RecordPageNavigation>
  );
};
