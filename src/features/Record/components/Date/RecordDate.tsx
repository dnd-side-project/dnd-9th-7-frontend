/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { DateValue } from 'src/types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Calendar from 'react-calendar';
import { commonStyles, StyledRequiredField, StyledTitle } from '@/features/Record/record.style';
import { SvgIcon } from '@/common/components/SvgIcon';
import 'react-calendar/dist/Calendar.css';
import { useformatDate, useOpen } from '@/common/hooks';
import { Overlay } from '@/common/components/Overlay';

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
