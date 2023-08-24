/* eslint-disable no-nested-ternary */
import { Navigation, Music, Record, Footer } from '@features/ViewRecord/components';
import { useState } from 'react';
import { ViewRecordTab } from 'src/types';

const ViewRecordPage = () => {
  const [selectedTab, setSelectedTab] = useState<ViewRecordTab>('music');
  return (
    <>
      <Navigation />
      {selectedTab === 'music' ? (
        <Music />
      ) : selectedTab === 'record' ? (
        <Record />
      ) : (
        <div>play</div>
      )}
      <Footer selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </>
  );
};

export default ViewRecordPage;
