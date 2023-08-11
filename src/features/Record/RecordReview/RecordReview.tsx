import styled from '@emotion/styled';
import { StyledTitle, commonStyles } from '@features/Record/record.styles';
import { theme } from '@styles/theme';

export const RecordReview = () => {
  return (
    <>
      <StyledTitle>Review</StyledTitle>
      <StyleRecordTextArea placeholder='한줄 평 가사를 입력해주세요' />
    </>
  );
};

const StyleRecordTextArea = styled.textarea`
  ${commonStyles()};
  color: ${theme.color.white};
  background-color: inherit;
`;
