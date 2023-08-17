import { SituationPageNavigation } from '@common/components/Navigation';
import { Spacing } from '@common/components/Spacing';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const SituationPage = () => {
  return (
    <>
      <SituationPageNavigation />
      <Spacing size={1.6} />
      <StyledTitle>Feeling</StyledTitle>
      <Spacing size={3} />
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', position: 'relative' }}
      >
        <StyledLine />
        <StyledLine />
        <StyledLine />
        <div
          style={{
            display: 'flex',
            gap: '3.7rem',
            position: 'absolute',
            transform: 'translateY(-30%)',
          }}
        >
          <StyledEmoji />
          <StyledEmoji />
          <StyledEmoji />
          <StyledEmoji />
        </div>
      </div>
      <Spacing size={8} />
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', position: 'relative' }}
      >
        <StyledLine />
        <StyledLine />
        <StyledLine />
        <div
          style={{
            display: 'flex',
            gap: '3.7rem',
            position: 'absolute',
            transform: 'translateY(-30%)',
          }}
        >
          <StyledEmoji />
          <StyledEmoji />
          <StyledEmoji />
          <StyledEmoji />
        </div>
      </div>
    </>
  );
};

export default SituationPage;

export const StyledTitle = styled.div`
  ${theme.font.semibold18};
  color: ${theme.color.gray07};
  width: 100%;
`;

export const StyledLine = styled.div`
  width: 34.2rem;
  height: 0.1rem;
  flex-shrink: 0;
  background: ${theme.color.gray12};
`;

export const StyledEmoji = styled.div`
  display: flex;
  width: 5.8rem;
  height: 5.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 50rem;
  background: ${theme.color.gray12};
  aspect-ratio: 1/1;
`;
