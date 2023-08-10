/* eslint-disable react/button-has-type */
import { CalendarPageFooter } from '@common/components/Footer';
import { CalendarPageNavigation } from '@common/components/Navigation';

const Home = () => {
  return (
    <>
      <CalendarPageNavigation />
      <div>캘린더 영역</div>
      <CalendarPageFooter />
    </>
  );
};

export default Home;
