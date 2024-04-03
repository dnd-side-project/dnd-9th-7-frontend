/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { client } from '@/apis/client';
import { theme } from '@/stylestheme';
import { Spacing } from '@/common/components/Spacing';

interface Props {
  value: string;
}
export const PlayingSearchList = ({ value }: Props) => {
  // TODO : youtube api react-quert 로직으로 연동하는 작업, music api 리스폰스 타입 지정
  const [playDatas, setPlayDatas] = useState<any>([]);
  useEffect(() => {
    const fetchMusicData = async () => {
      const query = value;

      try {
        const response = await client.get('/api/youtube', {
          params: {
            query,
          },
        });

        const responseData = response.data.data.items;
        setPlayDatas(responseData);
      } catch (error) {}
    };

    fetchMusicData();
  }, [value]);

  return (
    <>
      {playDatas?.map((playData: any) => (
        <>
          <iframe
            width='100%'
            height='200'
            src={`https://www.youtube.com/embed/${playData.id.videoId}?rel=0`}
            allowFullScreen
            title='youtube play'
          />
          <Spacing size={1.6} />
          <StyledTitle dangerouslySetInnerHTML={{ __html: playData.snippet.title }} />
          <StyledDate>
            {playData.snippet.channelTitle} · {playData.snippet.publishedAt}
          </StyledDate>
          <Spacing size={3.2} />
        </>
      ))}
    </>
  );
};

const StyledTitle = styled.div`
  ${theme.font.bold22}
  width: 100%;
`;

const StyledDate = styled.div`
  ${theme.font.medium14}
  color : ${theme.color.gray07};
  width: 100%;
`;
