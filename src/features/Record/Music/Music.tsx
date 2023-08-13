import styled from '@emotion/styled';
import { StyledTitle } from '@features/Record/record.styles';
import { theme } from '@styles/theme';
import { useResizeWidth } from '@common/hooks';
import { useEffect, useState } from 'react';

export const Music = () => {
  const [width, setWidth] = useState<number>();
  const resizedWidth = useResizeWidth();
  useEffect(() => {
    // NOTE : 처음 렌더링 됐을 때 main 태그가 잡히지 useEffect의 의존성 배열로 resizedWidth 를 넣어줘서 해결
    setWidth(document.querySelector('main')?.offsetWidth);
  }, [resizedWidth]);
  return (
    <>
      <StyledTitle>Music*</StyledTitle>
      <StyledCD height={width as number}>
        <StyledRecordButton> + </StyledRecordButton>
      </StyledCD>
    </>
  );
};

const StyledCD = styled.div<{ height: number }>`
  border-radius: 50rem;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: ${(props) => `${(props.height - 48) * 0.1}rem`};
  border: 1px solid ${theme.color.gray08};
  position: relative;
  background-size: 'cover'; // 이미지를 div에 맞게 조절
  background-image: url(https://picsum.photos/236/354);
`;

const StyledRecordButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray07};
  border-radius: 10rem;
  width: 6.2rem;
  height: 6.2rem;
  color: white;
  top: 0;
  left: 0;
`;
