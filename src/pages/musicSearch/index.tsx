import { MusicSearchPageNavigation } from '@common/components/Navigation';
import { Spacing } from '@common/components/Spacing';
import { MusicSearchInput } from '@features/MusicSearch/components';

const MusicSearchPage = () => {
  return (
    <>
      <MusicSearchPageNavigation />
      <MusicSearchInput />
      <Spacing size={2.4}/>
    </>
  );
};

export default MusicSearchPage;
