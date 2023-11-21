import { Footer as MyPlaylistPage } from '@common/components/Footer';
import { SvgIcon } from '@common/components/SvgIcon';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <MyPlaylistPage>
      <StyledLink to='/music-lounge'>
        <MyPlaylistPage.Left>
          <SvgIcon id='music_lounge_gray' />
        </MyPlaylistPage.Left>
      </StyledLink>

      <StyledLink to='/'>
        <MyPlaylistPage.Center>
          <SvgIcon id='music_log_gray' />
        </MyPlaylistPage.Center>
      </StyledLink>

      <StyledLink to='/my-playlist'>
        <MyPlaylistPage.Right>
          <SvgIcon id='my_playlist_white' />
        </MyPlaylistPage.Right>
      </StyledLink>
    </MyPlaylistPage>
  );
};

export default Footer;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
