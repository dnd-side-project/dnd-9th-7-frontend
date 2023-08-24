import { Navigation as ViewRecordPageNavigation } from '@common/components/Navigation';
import { SvgIcon } from '@common/components/SvgIcon';

export const Navigation = () => {
  return (
    <ViewRecordPageNavigation>
      <ViewRecordPageNavigation.Left>
        <SvgIcon id='leftArrow' size={24} />
      </ViewRecordPageNavigation.Left>
      <ViewRecordPageNavigation.Center />
      <ViewRecordPageNavigation.Right>
        <SvgIcon id='edit_horizontal_white' size={24} />
      </ViewRecordPageNavigation.Right>
    </ViewRecordPageNavigation>
  );
};
