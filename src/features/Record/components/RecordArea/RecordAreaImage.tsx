/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';
import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';
import { theme } from '@/styles';
import { SvgIcon } from '@/shared/common/components/SvgIcon';

interface Props {
  setImageUrl: Dispatch<SetStateAction<string>>;
}
export const RecordAreaImage = ({ setImageUrl }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageArray, setImageArray] = useState<any[]>([]);
  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageArray((prevArray) => [reader.result, ...prevArray]);
    };
  }, []);

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <StyledRecordContainer>
      <input
        accept='image/*'
        ref={inputRef}
        type='file'
        onChange={onUploadImage}
        style={{ display: 'none' }}
      />
      {imageArray.map((item) => (
        <StyledRecordImage src={item} alt='background' onClick={() => setImageUrl(item)} />
      ))}
      {!imageArray.length && (
        <StyleRecordMockUp>
          <SvgIcon id='gallery' size={24} />
        </StyleRecordMockUp>
      )}
      <StyleRecordButton onClick={onUploadImageButtonClick}>
        <SvgIcon id='whitePlus' size={24} />
      </StyleRecordButton>
    </StyledRecordContainer>
  );
};

const StyledRecordContainer = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  width: 100%;
  max-width: 34.2rem;
  overflow-x: auto;
`;
const StyleRecordButton = styled.button`
  width: 7rem;
  height: 9.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${theme.color.gray08};
  flex-shrink: 0;
`;

const StyleRecordMockUp = styled.div`
  width: 7rem;
  height: 9.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray12};
  border: 1px solid ${theme.color.gray08};
`;

const StyledRecordImage = styled.img`
  width: 7rem;
  height: 9.8rem;
  flex-shrink: 0;
`;
