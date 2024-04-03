import styled from '@emotion/styled';
import { Spacing } from '@/common/components/Spacing';
import { theme } from '@/styles';
import { Category, Navigation } from '@/features/Situation/components';
import { emotion1, emotion2, time, weather } from '@/features/Situation/categoryData';
import { StyledRequiredField } from '@/features/Record/record.style';

const SituationPage = () => {
  return (
    <>
      <Navigation />
      <Spacing size={1.6} />
      <StyledTitle>
        Feeling
        <StyledRequiredField>*</StyledRequiredField>
      </StyledTitle>
      <Spacing size={3} />
      <Category categoryList={emotion1} type='emotion' />
      <Spacing size={8} />
      <Category categoryList={emotion2} type='emotion' />
      <Spacing size={8.5} />
      <StyledTitle>
        Time
        <StyledRequiredField>*</StyledRequiredField>
      </StyledTitle>
      <Spacing size={3} />
      <Category categoryList={time} type='time' />
      <Spacing size={8.5} />
      <StyledTitle>
        Weather
        <StyledRequiredField>*</StyledRequiredField>
      </StyledTitle>
      <Spacing size={3} />
      <Category categoryList={weather} type='weather' />
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

export const StyledEmoji = styled.div<{ isSelected: boolean }>`
  display: flex;
  width: 5.8rem;
  height: 5.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 50rem;
  background: ${(props) => (props.isSelected ? theme.color.white : theme.color.gray12)};
  aspect-ratio: 1/1;
`;
