import styled from '@emotion/styled';

interface Props {
  music: number;
}

const Music = ({ music }: Props) => {
  return (
    <StyledMusic>
      <StyledMusicNum>{music + 1}</StyledMusicNum>
      <StyledMusicImage />
      <div>
        <StyledMusicTitle>WONDERWALL</StyledMusicTitle>
        <StyledMusicArtist>OASIS</StyledMusicArtist>
      </div>
    </StyledMusic>
  );
};

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

export default Music;
