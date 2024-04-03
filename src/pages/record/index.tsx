import { Spacing } from '@/commoncomponents/Spacing';
import {
  RecordDate,
  Situation,
  Review,
  RecordArea,
  Place,
  Music,
  YoutubePlay,
  Footer,
  Navigation,
} from '@/features/Record/components';

const RecordPage = () => {
  return (
    <>
      <Navigation />
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
      <Footer />
    </>
  );
};

export default RecordPage;
