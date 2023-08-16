/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { SvgIcon } from '@common/components/SvgIcon';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { commonStyles, StyledTitle } from '@features/Record/record.style';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { Overlay } from '@common/components/Overlay/Overlay';
import { useformatDate } from '@common/hooks/useFormatDate';
import { DateValue } from 'src/types';
import { useOpen } from '@common/hooks/useOpen';

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
      <StyledTitle>Date*</StyledTitle>
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
