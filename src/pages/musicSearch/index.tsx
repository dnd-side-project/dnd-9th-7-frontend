import { Spacing } from '@common/components/Spacing';
import { MusicSearchList, Navigation } from '@features/MusicSearch/components';
import { useState } from 'react';
import { SearchInput } from '@features/common/components';

const MusicSearchPage = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Navigation />
      <SearchInput setValue={setValue} />
      <Spacing size={2.4} />
      {value && <MusicSearchList value={value} />}
    </>
  );
};

export default MusicSearchPage;
