/* eslint-disable no-nested-ternary */
import {
  ViewRecordPageFooter,
  Music,
  Record,
  ViewRecordPageNavigation,
} from '@features/ViewRecord/components';
import { useState } from 'react';
import { ViewRecordTab } from 'src/types';

const ViewRecordPage = () => {
  const [selectedTab, setSelectedTab] = useState<ViewRecordTab>('music');
  return (
    <>
      <ViewRecordPageNavigation />
      {selectedTab === 'music' ? (
        <Music />
      ) : selectedTab === 'record' ? (
        <Record />
      ) : (
        <div>play</div>
      )}
      <ViewRecordPageFooter selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </>
  );
};

export default ViewRecordPage;
