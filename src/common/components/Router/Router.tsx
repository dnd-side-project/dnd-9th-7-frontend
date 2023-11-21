import { Route, Routes } from 'react-router-dom';
import Home from '@pages/index';
import RecordPage from '@pages/record';
import SituationPage from '@pages/situation';
import OnboardingPage from '@pages/onboarding';
import MusicSearchPage from '@pages/musicSearch';
import PlayingSearchPage from '@pages/playingSearch';
import ViewRecordPage from '@pages/viewRecord';
import MusicLoungePage from '@pages/musicLounge';
import MyPlaylist from '@pages/myPlaylist';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/onboarding' element={<OnboardingPage />} />
      <Route path='/record' element={<RecordPage />} />
      <Route path='/music-search' element={<MusicSearchPage />} />
      <Route path='/youtube-play' element={<PlayingSearchPage />} />
      <Route path='/situation' element={<SituationPage />} />
      <Route path='/view-record' element={<ViewRecordPage />} />
      <Route path='/music-lounge' element={<MusicLoungePage />} />
      <Route path='/my-playlist' element={<MyPlaylist />} />
    </Routes>
  );
};
