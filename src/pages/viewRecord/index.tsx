/* eslint-disable no-nested-ternary */
import {
  ViewRecordPageFooter,
  ViewRecordMusic,
  ViewRecordPageNavigation,
} from '@features/ViewRecord/components';
import { useState } from 'react';

type ViewRecordTab = 'music' | 'record' | 'play';
const ViewRecordPage = () => {
  const [selectedTab, setSelectedTab] = useState<ViewRecordTab>('music');
  return (
    <>
      <ViewRecordPageNavigation />
      {selectedTab === 'music' ? (
        <ViewRecordMusic />
      ) : selectedTab === 'record' ? (
        <div>record</div>
      ) : (
        <div>play</div>
      )}
      <ViewRecordPageFooter />
    </>
  );
};

export default ViewRecordPage;
