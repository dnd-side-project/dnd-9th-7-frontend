import { Navigation as MyPlaylistPageNavigation } from '@common/components/Navigation';
import { SvgIcon } from '@common/components/SvgIcon';

export const Navigation = () => {
  return (
    <MyPlaylistPageNavigation>
      <MyPlaylistPageNavigation.Left>
        <span>MY PLAYLIST</span>
      </MyPlaylistPageNavigation.Left>

      <MyPlaylistPageNavigation.Right>
        <SvgIcon id='filter_white' />
      </MyPlaylistPageNavigation.Right>
    </MyPlaylistPageNavigation>
  );
};
