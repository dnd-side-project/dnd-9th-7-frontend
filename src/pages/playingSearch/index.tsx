import { PlayingSearchPageNavigation } from '@common/components/Navigation';
import { Spacing } from '@common/components/Spacing';
import { SearchInput } from '@features/common/components';
import { useState } from 'react';
import { PlayingSearchList } from '@features/PlayingSearch';

const PlayingSearchPage = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <PlayingSearchPageNavigation />
      <SearchInput setValue={setValue} />
      <Spacing size={3.2} />
      {value && <PlayingSearchList value={value} />}
    </>
  );
};

export default PlayingSearchPage;
