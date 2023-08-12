import styled from '@emotion/styled';
import { commonStyles, StyledTitle } from '@features/Record/record.styles';

export const YoutubePlay = () => {
  return (
    <>
      <StyledTitle>Youtube Play</StyledTitle>
      <StyleYoutube />
    </>
  );
};

const StyleYoutube = styled.div`
  ${commonStyles()}
  height: 19.2rem;
  padding: 0;
`;
