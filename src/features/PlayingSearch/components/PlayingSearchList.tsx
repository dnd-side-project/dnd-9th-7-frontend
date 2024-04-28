/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */
import styled from '@emotion/styled';
import { Spacing } from '@/common/components/Spacing';
import { SvgIcon } from '@/common/components/SvgIcon';
import { useGetPlayData } from '@/features/PlayingSearch/apis/useGetPlayData';

interface Props {
  value: string;
}
export const PlayingSearchList = ({ value }: Props) => {
  const { data: playDatas } = useGetPlayData(value);

  return (
    <>
      {playDatas ? (
        playDatas?.map((playData: any) => (
          <div key={playData.id.videoId}>
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
          </div>
        ))
      ) : (
        <StyleEmptyWrapper>
          <Spacing size={10} />
          <SvgIcon id='bang_white' size={49} />
          <Spacing size={2.4} />
          <StyleEmptyText>해당되는 영상 정보가 없습니다.</StyleEmptyText>
        </StyleEmptyWrapper>
      )}
    </>
  );
};

const StyledTitle = styled.div`
  ${(props) => props.theme.font.bold22};
  width: 100%;
`;

const StyledDate = styled.div`
  ${(props) => props.theme.font.medium14};
  color: ${(props) => props.theme.color.gray07};
  width: 100%;
`;

const StyleEmptyText = styled.div`
  color: ${(props) => props.theme.color.gray04};
  ${(props) => props.theme.font.medium18};
`;

const StyleEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;
