/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { SvgIcon } from '@common/components/SvgIcon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { commonStyles, StyledTitle } from '@features/Record/record.style';

export const Date = () => {
  return (
    <>
      <StyledTitle>Date*</StyledTitle>
      <StyledRecordDate>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            width: 100%;
          `}
        >
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
