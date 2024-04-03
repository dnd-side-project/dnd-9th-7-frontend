import { useNavigate } from 'react-router-dom';
import { Navigation as ViewRecordPageNavigation } from '@/common/components/Navigation';
import { SvgIcon } from '@/common/components/SvgIcon';

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <ViewRecordPageNavigation>
      <ViewRecordPageNavigation.Left>
        <SvgIcon id='leftArrow' size={24} onClick={() => navigate(-1)} />
      </ViewRecordPageNavigation.Left>
      <ViewRecordPageNavigation.Center />
      <ViewRecordPageNavigation.Right>
        <SvgIcon id='edit_horizontal_white' size={24} />
      </ViewRecordPageNavigation.Right>
    </ViewRecordPageNavigation>
  );
};
