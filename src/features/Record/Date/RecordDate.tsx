/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { SvgIcon } from '@common/components/SvgIcon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { commonStyles, StyledRequiredField, StyledTitle } from '@features/Record/record.style';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { Overlay } from '@common/components/Overlay';
import { useformatDate, useOpen } from '@common/hooks';
import { DateValue } from 'src/types';

export const RecordDate = () => {
  const [value, onChange] = useState<DateValue>(new Date());
  const { open, onOpen, onClose } = useOpen();
  const date = useformatDate(value);

  return (
    <>
      {open && (
        <Overlay onClose={onClose}>
          <div>
            <Calendar onChange={onChange} value={value} onClickDay={onClose} />
          </div>
        </Overlay>
      )}
      <StyledTitle>
        Date<StyledRequiredField>*</StyledRequiredField>
      </StyledTitle>
      <StyledRecordDate onClick={onOpen}>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            width: 100%;
          `}
        >
          <span>{date}</span>
          <SvgIcon id='rightArrow' />
        </div>
      </StyledRecordDate>
    </>
  );
};

const StyledRecordDate = styled.div`
  ${commonStyles()}
`;
