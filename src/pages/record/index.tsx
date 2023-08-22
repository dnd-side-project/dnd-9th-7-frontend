import { RecordPageNavigation } from '@common/components/Navigation';
import { Spacing } from '@common/components/Spacing';
import {
  RecordDate,
  Situation,
  Review,
  RecordArea,
  Place,
  Music,
  YoutubePlay,
} from '@features/Record';
import { RecordPageFooter } from '@common/components/Footer';

const RecordPage = () => {
  return (
    <>
      <RecordPageNavigation />
      <Music />
      <Spacing size={3.4} />
      <RecordDate />
      <Spacing size={3.4} />
      <Situation />
      <Spacing size={3.4} />
      <Place />
      <Spacing size={3.4} />
      <Review />
      <Spacing size={3.4} />
      <RecordArea />
      <Spacing size={3.4} />
      <YoutubePlay />
      <Spacing size={4.4} />
      <RecordPageFooter />
    </>
  );
};

export default RecordPage;
