import { RecordPageNavigation } from '@common/components/Navigation';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';
import { Spacing } from '@common/Spacing';

const RecordPage = () => {
  return (
    <>
      <RecordPageNavigation />
      <StyledTitle>Music*</StyledTitle>
      <StyledCD />
      <Spacing size={3.4} />
      <StyledTitle>Date*</StyledTitle>
      <StyledRecordDate>2023/01/02</StyledRecordDate>
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
