import { Navigation } from '@common/components/Navigation';
import { SvgIcon } from '@common/components/SvgIcon';

export const PlayingSearchPageNavigation = () => {
  return (
    <Navigation>
      <Navigation.Left>
        <SvgIcon id='close_white' />
      </Navigation.Left>
      <Navigation.Center>
        <span>영상 첨부</span>
      </Navigation.Center>
      <Navigation.Right>
        <span>첨부</span>
      </Navigation.Right>
    </Navigation>
  );
};
