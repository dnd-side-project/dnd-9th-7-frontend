import { Navigation } from '@common/components/Navigation';
import { SvgIcon } from '@common/components/SvgIcon';

export const SituationPageNavigation = () => {
  return (
    <Navigation>
      <Navigation.Left>
        <SvgIcon id='leftArrow' />
      </Navigation.Left>
      <Navigation.Center>
        <span>상황선택</span>
      </Navigation.Center>
      <Navigation.Right>
        <span>완료</span>
      </Navigation.Right>
    </Navigation>
  );
};
