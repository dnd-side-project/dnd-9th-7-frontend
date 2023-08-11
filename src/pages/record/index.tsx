import { RecordPageNavigation } from '@common/components/Navigation';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { Spacing } from '@common/components/Spacing';
import { Review, Place } from '@features/Record';

const RecordPage = () => {
  return (
    <>
      <RecordPageNavigation />
      <StyledTitle>Music*</StyledTitle>
      <StyledCD />
      <Spacing size={3.4} />
      <StyledTitle>Date*</StyledTitle>
      <StyledRecordDate>2023/01/02</StyledRecordDate>
      <Spacing size={3.4} />
      <StyledTitle>Situation*</StyledTitle>
      <StyledRecordDate>2023/01/02</StyledRecordDate>
      <Spacing size={3.4} />
      <Place />
      <Spacing size={3.4} />
      <Review />
      <Spacing size={3.4} />
      <StyledTitle>Record</StyledTitle>
    </>
  );
};

const StyledTitle = styled.div`
  ${theme.font.semibold18};
  color: ${theme.color.gray07};
  width: 100%;
`;

const StyledCD = styled.img`
  border-radius: 50rem;
  display: flex;
  width: 100%;
  padding-top: 100%;
  border: 1px solid ${theme.color.gray08};
`;

const StyledRecordDate = styled.div`
  display: flex;
  padding: 2.1rem 1.8rem 2.1rem 2.4rem;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.6rem;
  align-self: stretch;
  border: 1px solid ${theme.color.gray08};
  margin-top: 1.2rem;
  ${theme.font.medium16}
`;

export default RecordPage;
