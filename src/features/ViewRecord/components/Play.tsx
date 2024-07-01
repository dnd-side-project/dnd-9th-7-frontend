import styled from '@emotion/styled';
import { Spacing } from '@/shared/common/components/Spacing';
import { theme } from '@/styles';

export const Play = () => {
  return (
    <>
      <StyledTitle>oasit-</StyledTitle>
      <StyledTitle>wonderwall</StyledTitle>
      <Spacing size={1} />
      <StyledArtist>Oasis offical</StyledArtist>
      <Spacing size={9.2} />
      <iframe
        width='100%'
        height='200'
        src='https://www.youtube.com/embed/g4jum8uMBXo?si=is8jBYkb00FkuzcL?rel=0'
        allowFullScreen
        title='youtube play'
      />
    </>
  );
};

const StyledTitle = styled.div`
  ${theme.font.bold32}
  width: 100%;
`;

const StyledArtist = styled.div`
  ${theme.font.medium16}
  color: ${theme.color.gray07};
  width: 100%;
`;
