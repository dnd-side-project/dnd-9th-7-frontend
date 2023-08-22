import styled from '@emotion/styled';
import { BlurBackground, Navigation } from '@features/MusicLounge/components';

const MusicLoungePage = () => {
  return (
    <>
      <Navigation />

      <StyledBlurBackground>
        <BlurBackground color='#04002D' />

        <StyledType>FEELING</StyledType>
        <StyledTitle>
          공허한 날 사람들이
          <br />
          많이 들은 음악
        </StyledTitle>
      </StyledBlurBackground>

      <StyledMusicList>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((music: number) => (
          <StyledMusic key={music}>
            <StyledMusicNum>{music + 1}</StyledMusicNum>
            <StyledMusicImage />
            <div>
              <StyledMusicTitle>WONDERWALL</StyledMusicTitle>
              <StyledMusicArtist>OASIS</StyledMusicArtist>
            </div>
          </StyledMusic>
        ))}
      </StyledMusicList>
    </>
  );
};

const StyledBlurBackground = styled.div`
  position: relative;
  width: calc(100% + 4.8rem);
  padding-top: 2rem;
  padding-bottom: 2.4rem;
  background-color: ${(props) => props.theme.color.white};
`;

const StyledType = styled.div`
  padding-right: 2.4rem;
  padding-left: 2.4rem;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.08);
  opacity: 0.35;
  ${(props) => props.theme.font.medium16}
`;

const StyledTitle = styled.div`
  padding-right: 2.4rem;
  padding-left: 2.4rem;
  margin-top: 6.2rem;
  text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.08);
  letter-spacing: -0.2px;
  opacity: 0.99; // 왜 이게 있어야 글자가 보이는거지..?
  ${(props) => props.theme.font.bold28}
`;

const StyledMusicList = styled.div`
  display: flex;
  width: calc(100% + 4.8rem);
  overflow-x: scroll;
  padding: 1.6rem 0;
`;

const StyledMusic = styled.div`
  margin-right: 1.6rem;
  :first-child {
    margin-left: 2.4rem;
  }
  :last-child {
    margin-right: 2.4rem;
  }
`;

const StyledMusicNum = styled.div`
  ${(props) => props.theme.font.medium14}
`;

const StyledMusicImage = styled.div`
  width: 12.8rem;
  aspect-ratio: 1/1;
  margin: 0.8rem 0 1.2rem 0;
  background-color: ${(props) => props.theme.color.gray11};
`;

const StyledMusicTitle = styled.div`
  ${(props) => props.theme.font.bold16}
`;

const StyledMusicArtist = styled.div`
  ${(props) => props.theme.font.medium14}
  color: ${(props) => props.theme.color.gray08};
`;

export default MusicLoungePage;
