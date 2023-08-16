import styled from '@emotion/styled';
import { commonStyles, StyledPlusButton, StyledTitle } from '@features/Record/record.style';

export const YoutubePlay = () => {
  return (
    <>
      <StyledTitle>Youtube Play</StyledTitle>
      <StyleYoutube>
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
