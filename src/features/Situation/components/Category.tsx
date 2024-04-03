/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';
import { useContext } from 'react';
import { SvgIcon } from '@/common/components/SvgIcon';
import { CategoryContext } from '@/features/Situation/CategoryContext';
import { theme } from '@/styles';
import * as Icons from '@/common/components/SvgIcon/assets';

interface Props {
  type: 'emotion' | 'time' | 'weather';
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
    } else if (type === 'weather') {
      setCategory((prev) => ({
        ...prev,
        weather: { value, label },
      }));
    }
  };

  const detailedState =
    type === 'emotion' ? category.emotion : type === 'time' ? category.time : category.weather;
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
              <SvgIcon
                id={
                  `${categoryItem.value}_${
                    detailedState.value === categoryItem.value ? 'black' : 'gray'
                  }` as keyof typeof Icons
                }
              />
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
  cursor: pointer;
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
