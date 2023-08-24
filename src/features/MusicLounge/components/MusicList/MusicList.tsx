import styled from '@emotion/styled';
import Music from './Music';

const MusicList = () => {
  return (
    <StyledMusicList>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((music: number) => (
        <Music key={music} music={music} />
      ))}
    </StyledMusicList>
  );
};

const StyledMusicList = styled.div`
  display: flex;
  width: calc(100% + 4.8rem);
  overflow-x: scroll;
  padding: 1.6rem 0;
`;

export default MusicList;
