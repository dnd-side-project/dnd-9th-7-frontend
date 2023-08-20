import { MusicSearchPageNavigation } from '@common/components/Navigation';
import { Spacing } from '@common/components/Spacing';
import { MusicSearchInput, MusicSearchList } from '@features/MusicSearch/components';
import { useState } from 'react';

const MusicSearchPage = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <MusicSearchPageNavigation />
      <MusicSearchInput setValue={setValue} />
      <Spacing size={2.4} />
      {value && <MusicSearchList value={value} />}
    </>
  );
};

export default MusicSearchPage;
