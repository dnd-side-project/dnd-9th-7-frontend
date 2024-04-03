/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { ViewRecordTab } from 'src/types';
import { Navigation, Music, Record, Footer, Play } from '@/features/ViewRecord/components';

const ViewRecordPage = () => {
  const [selectedTab, setSelectedTab] = useState<ViewRecordTab>('music');
  return (
    <>
      <Navigation />
      {selectedTab === 'music' ? <Music /> : selectedTab === 'record' ? <Record /> : <Play />}
      <Footer selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </>
  );
};

export default ViewRecordPage;
