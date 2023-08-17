import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '@pages/index';
import RecordPage from '@pages/record';
import SituationPage from '@pages/situation';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/record' element={<RecordPage />} />
      <Route path='/situation' element={<SituationPage />} />
    </Routes>
  );
};
