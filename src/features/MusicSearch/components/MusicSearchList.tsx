/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { client } from '@/apis/client';
import { SvgIcon } from '@/common/components/SvgIcon';
import { Spacing } from '@/common/components/Spacing';

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
      {musicDatas.length ? (
        musicDatas.map((musicData: any) => (
          <StyledMusicSearchItem key={musicData.id}>
            <StyledImage src={musicData.album.images[0].url} />
            <StyleTextWrapper>
              <StyledTitle>{musicData.artists[0].name}</StyledTitle>
              <StyledDescription>{musicData.name}</StyledDescription>
              <StyledDescription>{musicData.album.releaseDate}</StyledDescription>
            </StyleTextWrapper>
          </StyledMusicSearchItem>
        ))
      ) : (
        <StyleEmptyWrapper>
          <Spacing size={10} />
          <SvgIcon id='bang_white' size={49} />
          <Spacing size={2.4} />
          <StyleEmptyText>해당되는 음악 정보가 없습니다</StyleEmptyText>
          <StyleEmptyText>직접 음악을 등록하시겠습니까?</StyleEmptyText>
          <Spacing size={2.4} />
          <div style={{ display: 'flex', cursor: 'pointer' }}>
            <StyleEmptyText2>직접 등록하기</StyleEmptyText2>
            <SvgIcon id='arrow_right_orange' color='black' />
          </div>
        </StyleEmptyWrapper>
      )}
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
  border-bottom: 1px solid ${(props) => props.theme.color.gray08};
`;

const StyledImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`;

const StyledTitle = styled.div`
  color: ${(props) => props.theme.color.white};
  ${(props) => props.theme.font.bold16};
`;

const StyledDescription = styled.div`
  color: ${(props) => props.theme.color.gray08};
  ${(props) => props.theme.font.medium14};
`;

const StyleEmptyText = styled.div`
  color: ${(props) => props.theme.color.gray04};
  ${(props) => props.theme.font.medium18};
`;

const StyleEmptyText2 = styled.div`
  color: ${(props) => props.theme.color.orange};
  ${(props) => props.theme.font.bold16};
`;

const StyleEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const StyleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
