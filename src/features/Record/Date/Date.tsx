import { SvgIcon } from '@common/components/SvgIcon';
import styled from '@emotion/styled';
import { commonStyles, StyledTitle } from '@features/Record/record.style';

export const Date = () => {
  return (
    <>
      <StyledTitle>Date*</StyledTitle>
      <StyledRecordDate>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <span>2023/01/02</span>
          <SvgIcon id='rightArrow' />
        </div>
      </StyledRecordDate>
    </>
  );
};

const StyledRecordDate = styled.div`
  ${commonStyles()}
`;
