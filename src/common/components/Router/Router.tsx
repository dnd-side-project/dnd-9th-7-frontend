import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/index';
import RecordPage from '@pages/record';
import SituationPage from '@pages/situation';
import OnboardingPage from '@pages/onboarding';
import MusicSearchPage from '@pages/musicSearch';
import PlayingSearchPage from '@pages/playingSearch';
import MusicLoungePage from '@pages/musicLounge';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/onboarding' element={<OnboardingPage />} />
      <Route path='/record' element={<RecordPage />} />
      <Route path='/music-search' element={<MusicSearchPage />} />
      <Route path='/youtube-play' element={<PlayingSearchPage />} />
      <Route path='/situation' element={<SituationPage />} />
      <Route path='/music-lounge' element={<MusicLoungePage />} />
    </Routes>
  );
};
