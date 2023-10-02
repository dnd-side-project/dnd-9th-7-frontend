import styled from '@emotion/styled';
import { commonStyles, StyledPlusButton, StyledTitle } from '@features/Record/record.style';
import { useNavigate } from 'react-router-dom';

export const YoutubePlay = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyledTitle>Youtube Play</StyledTitle>
      <StyleYoutube
        onClick={() => {
          navigate('/youtube-play');
        }}
      >
        <StyledPlusButton />
      </StyleYoutube>
    </>
  );
};

const StyleYoutube = styled.div`
  ${commonStyles()}
  justify-content: center;
  align-items: center;
  display: flex;
  height: 19.2rem;
  padding: 0;
`;
