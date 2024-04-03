/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { theme } from '@/styles';
import { client } from '@/apis/client';

interface Props {
  value: string;
}
export const MusicSearchList = ({ value }: Props) => {
  // TODO : music api react-quert 로직으로 연동하는 작업, music api 리스폰스 타입 지정
  const [musicDatas, setMusicDatas] = useState<any>([]);
  useEffect(() => {
    const fetchMusicData = async () => {
      const query = value;
      const offset = 1;

      try {
        const response = await client.get('/api/music', {
          params: {
            query,
            offset,
          },
        });

        const responseData = response.data[0].tracks.items;
        setMusicDatas(responseData);
      } catch (error) {}
    };

    fetchMusicData(); // 컴포넌트가 마운트되면 데이터를 가져오도록 실행
  }, [value]);

  return (
    <>
      {musicDatas?.map((musicData: any) => (
        <StyledMusicSearchItem key={musicData.id}>
          <StyledImage src={musicData?.album.images[0].url} />
          <StyleTextWrapper>
            <StyledTitle>{musicData?.artists[0].name}</StyledTitle>
            <StyledDescription>{musicData?.name}</StyledDescription>
            <StyledDescription>{musicData?.album.releaseDate}</StyledDescription>
          </StyleTextWrapper>
        </StyledMusicSearchItem>
      ))}
      <StyledMusicSearchItem>
        <StyledImage src='https://picsum.photos/236/354' />
        <StyleTextWrapper>
          <StyledTitle>WOnder</StyledTitle>
          <StyledDescription>oasis</StyledDescription>
          <StyledDescription>2023.08.20</StyledDescription>
        </StyleTextWrapper>
      </StyledMusicSearchItem>
    </>
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
