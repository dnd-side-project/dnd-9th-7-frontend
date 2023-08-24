import { Spacing } from '@common/components/Spacing';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { useState } from 'react';

export const Record = () => {
  const [imageUrl, setImageUrl] = useState('https://picsum.photos/236/354');
  const imageArray = [
    'https://picsum.photos/236/354',
    'https://picsum.photos/236/355',
    'https://picsum.photos/236/356',
    'https://picsum.photos/236/357',
    'https://picsum.photos/236/358',
    'https://picsum.photos/236/359',
  ];
  return (
    <>
      <Spacing size={1.2} />
      <StyledrRecordAreaContainer imageUrl={imageUrl}>
        오늘이 바로 그날이야. 네게 다시 기회가 돌아올 날이지. 무얼 해야 하는지는 이쯤 되면 알겠지.
        내 생각에는 내가 널 향해 느끼는 이 감정을 이해할 사람은 없을 거야. 거리에 도는 소문에는 네
        마음속 열정이 식어버렸다지. 너도 들어본 적 있겠지만 별 신경은 쓰지 않았겠지. 내 생각에는
        내가 널 향해 느끼는 이 감정을 이해할 사람은 없을 거야. 우리가 걸어야 할 모든 길은
        구불구불하고 우리를 이끄는 불빛은 너무 눈이 부셔. 어떻게 전해야 할지 모르겠어. 넌 내
        원더월이야.
      </StyledrRecordAreaContainer>
      <Spacing size={4} />
      <StyledRecordContainer>
        {imageArray.map((item) => (
          <StyledRecordImage src={item} alt='background' onClick={() => setImageUrl(item)} />
        ))}
      </StyledRecordContainer>
    </>
  );
};

const StyledrRecordAreaContainer = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 48rem;
  background-size: 'cover';
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  ${theme.font.medium16}
  color: ${theme.color.white};
  display: flex;
  align-items: center;
`;

const StyledRecordImage = styled.img`
  width: 6rem;
  height: 7.6rem;
  flex-shrink: 0;
  cursor: pointer;
`;

const StyledRecordContainer = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  width: 100%;
  max-width: 34.2rem;
  overflow-x: auto;
  background-color: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000 100%);
`;
