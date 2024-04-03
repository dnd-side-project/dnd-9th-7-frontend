/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled';
import { theme } from '@/styles';
import { SvgIcon } from '@/common/components/SvgIcon';
import { Spacing } from '@/common/components/Spacing';

export const Music = () => {
  const tagArray = ['평온', '저녁', '맑음'];
  return (
    <>
      <StyledDate1>2023.01</StyledDate1>
      <StyledDate2>06</StyledDate2>
      <StyledCD />
      <StyleCDInfo>
        <Spacing size={12} />
        <span css={theme.font.bold20}>Oasis</span>
        <span css={theme.font.bold32}>WonderAll</span>
        <Spacing size={3.6} />
        <StyledLine />
        <Spacing size={3.6} />
        <StyleEmojiContainer>
          {tagArray.map((tag) => (
            <div
              css={{
                display: 'flex',
                gap: '0.8rem',
              }}
            >
              <SvgIcon id='happiness_white' size={26} />
              <span>{tag}</span>
            </div>
          ))}
        </StyleEmojiContainer>
        <Spacing size={4.4} />
      </StyleCDInfo>
      <Spacing size={15} />
      <StyledTagWrapper>
        <StyledTag>
          <SvgIcon id='place' />
          운정 캠핑장
        </StyledTag>
      </StyledTagWrapper>
      <Spacing size={10} />
    </>
  );
};

const StyleEmojiContainer = styled.div`
  display: flex;
  width: 100%;
  ${theme.font.medium16}
  justify-content: space-between;
`;
const StyledLine = styled.span`
  width: 100%;
  height: 0.1rem;
  background-color: ${theme.color.transparency02};
`;
const StyleCDInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  position: absolute;
  padding-left: 3.6rem;
  padding-right: 3.6rem;
  top: 26rem;
  width: calc(100% - 12rem);
  aspect-ratio: 1/1;
  background-image: url('/images/record.png');
`;

const StyledCD = styled.div`
  border-radius: 50rem;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  border: 1px solid ${theme.color.gray08};
  background-size: 'cover'; // 이미지를 div에 맞게 조절
  background-image: url(https://picsum.photos/236/354);
`;

const StyledDate1 = styled.span`
  ${theme.font.semibold16}
  width: 100%;
  display: flex;
  justify-content: end;
`;

const StyledDate2 = styled.span`
  ${theme.font.bold36}
  width: 100%;
  display: flex;
  justify-content: end;
`;

const StyledTag = styled.div`
  display: flex;
  padding: 0.6rem 1.2rem 0.6rem 0.8rem;
  justify-content: left;
  align-items: flex-start;
  gap: 1rem;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.25) 100%);
  color: ${theme.color.gray03};
  ${theme.font.medium16}
`;

const StyledTagWrapper = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
`;
