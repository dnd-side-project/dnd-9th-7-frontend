import styled from '@emotion/styled';
import { StyledTitle, StyledPlusButton } from '@features/Record/record.style';
import { theme } from '@styles/theme';

export const Music = () => {
  return (
    <>
      <StyledTitle>Music*</StyledTitle>
      <StyledCD>
        <StyledPlusButton />
      </StyledCD>
    </>
  );
};

const StyledCD = styled.div`
  border-radius: 50rem;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  border: 1px solid ${theme.color.gray08};
  position: relative;
  background-size: 'cover'; // 이미지를 div에 맞게 조절
  background-image: url(https://picsum.photos/236/354);
`;
