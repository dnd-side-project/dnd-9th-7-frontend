import { RecordPageNavigation } from '@common/components/Navigation';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { Spacing } from '@common/components/Spacing';
import { Review, Place, Music } from '@features/Record';
import { RecordPageFooter } from '@common/components/Footer';

const RecordPage = () => {
  return (
    <>
      <RecordPageNavigation />
      <Music />
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
      <RecordPageFooter />
    </>
  );
};

const StyledTitle = styled.div`
  ${theme.font.semibold18};
  color: ${theme.color.gray07};
  width: 100%;
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
