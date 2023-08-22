import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/index';
import RecordPage from '@pages/record';
import SituationPage from '@pages/situation';
import OnboardingPage from '@pages/onboarding';
import MusicSearchPage from '@pages/musicSearch';
import PlayingSearchPage from '@pages/playingSearch';
import ViewRecordPage from '@pages/viewRecord';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/onboarding' element={<OnboardingPage />} />
      <Route path='/record' element={<RecordPage />} />
      <Route path='/musicSearch' element={<MusicSearchPage />} />
      <Route path='/youtubePlay' element={<PlayingSearchPage />} />
      <Route path='/situation' element={<SituationPage />} />
      <Route path='/viewRecord' element={<ViewRecordPage />} />
    </Routes>
  );
};
