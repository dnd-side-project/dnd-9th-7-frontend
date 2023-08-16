import React from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Arrow = () => <StyledArrow />;

const Dots = (dots: React.ReactNode) => <StyledDots>{dots}</StyledDots>;

const Pagination = () => <StyledPagination />;

const OnboardingPage = () => {
  const sliderSettings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    nextArrow: Arrow(),
    prevArrow: Arrow(),
    appendDots: Dots,
    customPaging: Pagination,
  };

  return (
    <>
      <StyledSlider {...sliderSettings}>
        <>
          <StyledHeader>
            <StyledHeaderTitle>MUSIC LOG</StyledHeaderTitle>
            <StyledHeaderSubTitle>
              음악과 함께 순간의 감정과 느낌을 생생하게 기록해요
            </StyledHeaderSubTitle>
          </StyledHeader>

          <StyledSlide>1</StyledSlide>
        </>

        <>
          <StyledHeader>
            <StyledHeaderTitle>My Playlist</StyledHeaderTitle>
            <StyledHeaderSubTitle>
              나의 기록을 기반으로 플레이리스트를 제공해 드려요
            </StyledHeaderSubTitle>
          </StyledHeader>

          <StyledSlide>2</StyledSlide>
        </>

        <>
          <StyledHeader>
            <StyledHeaderTitle>Music Lounge</StyledHeaderTitle>
            <StyledHeaderSubTitle>
              상황별로 사람들이 많이 들은 음악을 확인할 수 있어요
            </StyledHeaderSubTitle>
          </StyledHeader>

          <StyledSlide>3</StyledSlide>
        </>
      </StyledSlider>

      <StyledKakaoButton>카카오톡으로 계속하기</StyledKakaoButton>
    </>
  );
};

const StyledSlider = styled(Slider)`
  width: 100vw;
  aspect-ratio: 1/1;
`;

const StyledHeader = styled.div`
  width: 100%;
  padding: 5.6rem 2.4rem 4rem 2.4rem;
`;

const StyledHeaderTitle = styled.div`
  ${(props) => props.theme.font.bold32}
  margin-bottom: 1.2rem;
`;

const StyledHeaderSubTitle = styled.div`
  ${(props) => props.theme.font.medium16}
`;

const StyledSlide = styled.div`
  width: 100% !important;
  aspect-ratio: 1/1;
  background-color: #1b1b1b;

  /* 추후 삭제 예정 */
  ${(props) => props.theme.font.bold36}
  display: flex !important;
  justify-content: center;
  align-items: center;
`;

const StyledArrow = styled.div`
  display: none !important;
`;

const StyledDots = styled.div`
  position: relative;
  bottom: 0;
  margin: 4.4rem 0;
  li {
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${(props) => props.theme.color.gray08};
    border-radius: 0.6rem;
    margin: 0 6px;
    transition: all 0.5s ease-in-out;
  }
  .slick-active {
    width: 2rem;
    border-radius: 0.6rem;
    background-color: ${(props) => props.theme.color.white};
  }
`;

const StyledPagination = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledKakaoButton = styled.div`
  ${(props) => props.theme.font.medium16}
  color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.2rem;
  background-color: #fee500;
  margin-bottom: 8rem;
`;

export default OnboardingPage;
