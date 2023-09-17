import { Navigation } from '@common/components/Navigation';
import { SvgIcon } from '@common/components/SvgIcon';
import { useNavigate } from 'react-router-dom';

export const MusicSearchPageNavigation = () => {
  const navigate = useNavigate();
  return (
    <Navigation>
      <Navigation.Left>
        <SvgIcon id='close_white' onClick={() => navigate(-1)} />
      </Navigation.Left>
      <Navigation.Center>
        <span>음악 검색</span>
      </Navigation.Center>
      <Navigation.Right>
        <span>첨부</span>
      </Navigation.Right>
    </Navigation>
  );
};
