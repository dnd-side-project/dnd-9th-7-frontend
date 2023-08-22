import { useCallback, Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { SvgIcon } from '@common/components/SvgIcon';

interface Props {
  selectedDate: { year: number; month: number; date: number };
  setSelectedDate: Dispatch<SetStateAction<{ year: number; month: number; date: number }>>;
}

const CalendarHeader = ({ selectedDate, setSelectedDate }: Props) => {
  /**
   * 이전 달 보기 함수
   */
  const prevMonth = useCallback(() => {
    setSelectedDate((prev) => ({
      year: prev.month === 1 ? prev.year - 1 : prev.year,
      month: prev.month === 1 ? 12 : prev.month - 1,
      date: 1,
    }));
  }, [setSelectedDate]);

  /**
   * 다음 달 보기 함수
   */
  const nextMonth = useCallback(() => {
    setSelectedDate((prev) => ({
      year: prev.month === 12 ? prev.year + 1 : prev.year,
      month: prev.month === 12 ? 1 : prev.month + 1,
      date: 1,
    }));
  }, [setSelectedDate]);
  return (
    <StyledCalendarHeader>
      <StyledMonthYear>
        <StyledMonth>
          {selectedDate.month < 10 && '0'}
          {selectedDate.month}
        </StyledMonth>
        <StyledYear>{selectedDate.year}</StyledYear>
      </StyledMonthYear>

      <StyledArrow>
        <SvgIcon id='arrow_left_white' onClick={() => prevMonth()} />
        <SvgIcon id='arrow_right_white' onClick={() => nextMonth()} />
      </StyledArrow>
    </StyledCalendarHeader>
  );
};

const StyledCalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2rem;
`;

const StyledMonthYear = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 600;
  gap: 0.8rem;
`;

const StyledMonth = styled.div`
  font-size: 8rem;
  line-height: 6.2rem;
`;

const StyledYear = styled.div`
  font-size: 1.8rem;
`;

const StyledArrow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3.6rem;
`;

export default CalendarHeader;
