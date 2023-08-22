import { Navigation } from '@common/components/Navigation';
import { SvgIcon } from '@common/components/SvgIcon';

export const ViewRecordPageNavigation = () => {
  return (
    <Navigation>
      <Navigation.Left>
        <SvgIcon id='leftArrow' />
      </Navigation.Left>
      <Navigation.Center />
      <Navigation.Right>
        <SvgIcon id='leftArrow' />
      </Navigation.Right>
    </Navigation>
  );
};
