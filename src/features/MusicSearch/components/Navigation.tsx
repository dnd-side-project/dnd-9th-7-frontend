import { useNavigate } from 'react-router-dom';
import { Navigation as MusicSearchPageNavigation } from '@/common/components/Navigation';
import { SvgIcon } from '@/common/components/SvgIcon';

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <MusicSearchPageNavigation>
      <MusicSearchPageNavigation.Left>
        <SvgIcon id='close_white' onClick={() => navigate(-1)} />
      </MusicSearchPageNavigation.Left>
      <MusicSearchPageNavigation.Center>
        <span>음악 검색</span>
      </MusicSearchPageNavigation.Center>
      <MusicSearchPageNavigation.Right>
        <span>첨부</span>
      </MusicSearchPageNavigation.Right>
    </MusicSearchPageNavigation>
  );
};
