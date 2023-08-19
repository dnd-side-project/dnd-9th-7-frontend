import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/index';
import RecordPage from '@pages/record';
import SituationPage from '@pages/situation';
import OnboardingPage from '@pages/onboarding';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/onboarding' element={<OnboardingPage />} />
      <Route path='/record' element={<RecordPage />} />
      <Route path='/situation' element={<SituationPage />} />
      <Route path='/musicSearch' element={<SituationPage />} />
      <Route path='/videoSearch' element={<SituationPage />} />
    </Routes>
  );
};
