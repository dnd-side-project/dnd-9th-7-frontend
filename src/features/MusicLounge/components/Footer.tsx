import { Footer as MusicLoungePage } from '@common/components/Footer';
import { SvgIcon } from '@common/components/SvgIcon';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <MusicLoungePage>
      <StyledLink to='/music-lounge'>
        <MusicLoungePage.Left>
          <SvgIcon id='music_lounge_white' />
        </MusicLoungePage.Left>
      </StyledLink>

      <StyledLink to='/'>
        <MusicLoungePage.Center>
          <SvgIcon id='music_log_gray' />
        </MusicLoungePage.Center>
      </StyledLink>

      <StyledLink to='/my-playlist'>
        <MusicLoungePage.Right>
          <SvgIcon id='my_playlist_gray' />
        </MusicLoungePage.Right>
      </StyledLink>
    </MusicLoungePage>
  );
};

export default Footer;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
