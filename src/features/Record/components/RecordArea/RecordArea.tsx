/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unstable-nested-components */
import styled from '@emotion/styled';
import { useState } from 'react';
import { commonStyles, StyledTitle } from '@/features/Record/record.style';
import { theme } from '@/styles/theme';
import { Spacing } from '@/shared/common/components/Spacing';
import { RecordAreaImage } from './RecordAreaImage';

/**
 * TODO : textarea 끝에서부터 입력하는 방법 더 찾아보기
 */
export const RecordArea = () => {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [textLength, setTextLength] = useState<number>();

  const handleInputChange = (e: any) => {
    setText(e.target.value);
    setTextLength(e.target.scrollHeight);
    const lines = e.target.value.split('\n');
    const lineNumber =
      lines.findIndex(
        (line: any) =>
          line === e.target.value.substring(0, e.target.selectionStart).split('\n').pop(),
      ) + 1;

    console.log(`현재 줄: ${lineNumber}`);
    console.log(
      getComputedStyle(document.getElementById('record') as any).lineHeight,
      (document.getElementById('record') as any).scrollHeight,
    );
  };

  const handleKeyDown = (e: any) => {
    const { selectionStart, value } = e.target;

    if (e.key === 'Enter' && selectionStart === value.length) {
      console.log('커서가 끝에서 다음 첫 줄로 넘어감');
    }
  };

  // eslint-disable-next-line consistent-return
  const calculateLineCount = () => {
    const el = document.querySelector('main');
    if (el) {
      return el.offsetWidth / 16;
    }
  };

  console.log(calculateLineCount());

  return (
    <>
      <StyledTitle>Record</StyledTitle>
      <StyledrRecordAreaContainer imageUrl={imageUrl}>
        <StyledrRecordArea>
          <div style={{ flex: 1 }} />
          <StyledText
            value={text}
            onChange={handleInputChange}
            num={text.length}
            lineNum={calculateLineCount() as number}
            onKeyDown={handleKeyDown}
            placeholder='내용을 입력해주세요'
            id='record'
          />
        </StyledrRecordArea>
      </StyledrRecordAreaContainer>
      <Spacing size={2.8} />
      <RecordAreaImage setImageUrl={setImageUrl} />
    </>
  );
};

const StyledrRecordAreaContainer = styled.div<{ imageUrl: string }>`
  ${commonStyles()};
  border: none;
  height: 48rem;
  background-color: ${({ imageUrl }) => (imageUrl ? 'rgba(0, 0, 0, 0.5)' : theme.color.gray12)};
  padding: 1.8rem;
  background-size: 'cover';
  background-image: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : 'none')};
`;

const StyledrRecordArea = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 44.4rem;
  padding: 1.8rem;
  height: 48rem;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: ${theme.color.white};
`;

const StyledText = styled.textarea<{ num: number; lineNum: number }>`
  height: ${(props) => Math.max(1, props.num / 20) * 1.5}rem;
  width: 100%;
  background-color: inherit;
  outline: none; /* 포커스 시 아웃라인 제거 */
  color: ${theme.color.white};
  resize: none;
  border: none;
  ${theme.font.medium16};
`;
