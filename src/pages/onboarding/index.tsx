import styled from '@emotion/styled';

const OnboardingPage = () => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderTitle>MUSIC LOG</StyledHeaderTitle>
        <StyledHeaderSubTitle>
          음악과 함께 순간의 감정과 느낌을 생생하게 기록해요
        </StyledHeaderSubTitle>
      </StyledHeader>

      <StyledSlider />

      <StyledKakaoButton>카카오톡으로 계속하기</StyledKakaoButton>
    </>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  padding: 5.6rem 0 4rem 0;
`;

const StyledHeaderTitle = styled.div`
  ${(props) => props.theme.font.bold32}
  margin-bottom: 1.2rem;
`;

const StyledHeaderSubTitle = styled.div`
  ${(props) => props.theme.font.medium16}
`;

const StyledSlider = styled.div`
  width: 100vw;
  aspect-ratio: 1/1;
  background-color: #1b1b1b;
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
  margin: 4.4rem 0 8rem 0;
`;

export default OnboardingPage;
