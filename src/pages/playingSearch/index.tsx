import { useState } from 'react';
import { Spacing } from '@/shared/common/components/Spacing';
import { SearchInput } from '@/shared/search/components';
import { PlayingSearchList, Navigation } from '@/features/PlayingSearch/components';

const PlayingSearchPage = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Navigation />
      <SearchInput setValue={setValue} />
      <Spacing size={3.2} />
      {value && <PlayingSearchList value={value} />}
    </>
  );
};

export default PlayingSearchPage;
