import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  categoryList: { value: string; label: string }[];
}

export const Category = ({ category, setCategory, categoryList }: Props) => {
  return (
    <StyledContainer>
      <StyledLine />
      <StyledLine />
      <StyledLine />
      <StyledEmojiContainer>
        {categoryList.map((categoryItem) => (
          <StyledEmojiWrapper
            onClick={() => setCategory(categoryItem.value)}
            isSelected={category === categoryItem.value}
          >
            <StyledEmoji isSelected={category === categoryItem.value}>
              {categoryItem.value}
            </StyledEmoji>
            {categoryItem.label}
          </StyledEmojiWrapper>
        ))}
      </StyledEmojiContainer>
    </StyledContainer>
  );
};

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

const StyledEmojiWrapper = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  ${theme.font.medium16}
  color: ${(props) => (props.isSelected ? theme.color.white : theme.color.gray07)};
`;

const StyledEmojiContainer = styled.div`
  display: flex;
  gap: 3.7rem;
  position: absolute;
  transform: translateY(-30%);
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
`;
