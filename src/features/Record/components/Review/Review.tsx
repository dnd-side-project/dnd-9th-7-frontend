import styled from '@emotion/styled';
import { StyledTitle, commonStyles } from '@/features/Record/record.style';

export const Review = () => {
  return (
    <>
      <StyledTitle>Review</StyledTitle>
      <StyleRecordTextArea placeholder='한줄 평 가사를 입력해주세요' />
    </>
  );
};

const StyleRecordTextArea = styled.textarea`
  ${commonStyles()};
  background-color: inherit;
`;
