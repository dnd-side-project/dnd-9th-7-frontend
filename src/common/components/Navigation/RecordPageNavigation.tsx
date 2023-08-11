import { Navigation } from '@common/components/Navigation';
import { SvgIcon } from '@common/components/SvgIcon';

export const RecordPageNavigation = () => {
  return (
    <Navigation>
      <Navigation.Left>
        <SvgIcon id='back' />
      </Navigation.Left>
      <Navigation.Center>
        <span>기록하기</span>
      </Navigation.Center>
      <Navigation.Right>
        <span>완료</span>
      </Navigation.Right>
    </Navigation>
  );
};
