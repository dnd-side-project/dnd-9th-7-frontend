import styled from '@emotion/styled';
import { CategoryContext } from '@features/Situation/CategoryContext';
import { theme } from '@styles/theme';
import { useContext } from 'react';

interface Props {
  type: string;
  categoryList: { value: string; label: string }[];
}

export const Category = ({ type, categoryList }: Props) => {
  const { category, setCategory } = useContext(CategoryContext);
  const setDetailCategory = (value: string, label: string) => {
    if (type === 'emotion') {
      setCategory((prev) => ({
        ...prev,
        emotion: { value, label },
      }));
    } else if (type === 'time') {
      setCategory((prev) => ({
        ...prev,
        time: { value, label },
      }));
    }
  };

  console.log(category);
  const detailedState = type === 'emotion' ? category.emotion : category.time;
  return (
    <StyledContainer>
      <StyledLine />
      <StyledLine />
      <StyledLine />
      <StyledEmojiContainer>
        {categoryList.map((categoryItem) => (
          <StyledEmojiWrapper
            onClick={() => setDetailCategory(categoryItem.value, categoryItem.label)}
            isSelected={detailedState.value === categoryItem.value}
            key={categoryItem.value}
          >
            <StyledEmoji isSelected={detailedState.value === categoryItem.value}>
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
  transform: translateY(-20%);
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
`;
