import { useNavigate } from 'react-router-dom';
import { Navigation as PlayingSearchPageNavigation } from '@/common/components/Navigation';
import { SvgIcon } from '@/common/components/SvgIcon';

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <PlayingSearchPageNavigation>
      <PlayingSearchPageNavigation.Left>
        <SvgIcon id='close_white' onClick={() => navigate(-1)} />
      </PlayingSearchPageNavigation.Left>
      <PlayingSearchPageNavigation.Center>
        <span>영상 첨부</span>
      </PlayingSearchPageNavigation.Center>
      <PlayingSearchPageNavigation.Right>
        <span>첨부</span>
      </PlayingSearchPageNavigation.Right>
    </PlayingSearchPageNavigation>
  );
};
