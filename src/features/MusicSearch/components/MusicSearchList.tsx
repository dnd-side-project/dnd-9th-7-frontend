import styled from '@emotion/styled';
import { theme } from '@styles/theme';

export const MusicSearchList = () => {
  return (
    <StyledMusicSearchItem>
      <StyledImage src='https://picsum.photos/236/354' />
      <StyleTextWrapper>
        <StyledTitle>WOnder</StyledTitle>
        <StyledDescription>oasis</StyledDescription>
        <StyledDescription>2023.08.20</StyledDescription>
      </StyleTextWrapper>
    </StyledMusicSearchItem>
  );
};

const StyledMusicSearchItem = styled.div`
  display: flex;
  width: 100%;
  height: 8.8rem;
  padding: 0.9rem 0;
  justify-content: left;
  align-items: center;
  gap: 1.6rem;
  border-bottom: 1px solid ${theme.color.gray08};
`;

const StyledImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`;

const StyledTitle = styled.div`
  color: ${theme.color.white};
  ${theme.font.bold16};
`;

const StyledDescription = styled.div`
  color: ${theme.color.gray08};
  ${theme.font.medium14};
`;

const StyleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
