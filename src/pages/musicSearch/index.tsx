import { MusicSearchPageNavigation } from '@common/components/Navigation';
import { Spacing } from '@common/components/Spacing';
import { MusicSearchList } from '@features/MusicSearch/components';
import { useState } from 'react';
import { SearchInput } from '@features/common/components';

const MusicSearchPage = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <MusicSearchPageNavigation />
      <SearchInput setValue={setValue} />
      <Spacing size={2.4} />
      {value && <MusicSearchList value={value} />}
    </>
  );
};

export default MusicSearchPage;
