import { Navigation, Section } from '@features/MusicLounge/components';
import Footer from '@features/MusicLounge/components/Footer';

const MusicLoungePage = () => {
  return (
    <>
      <Navigation />
      <Section type='FEELING' title='공허한 날 사람들이' color='#04002D' />
      <Section type='TIME' title='새벽에 사람들이' color='#3D33AA' />
      <Section type='WEATHER' title='비오는 날 사람들이' color='#128A92' />
      <Section type='SEASON' title='여름에 사람들이' color='#4290EC' />
      <div style={{ paddingTop: '6rem' }} />
      <Footer />
    </>
  );
};

export default MusicLoungePage;
