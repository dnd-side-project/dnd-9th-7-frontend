import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';

interface IDateState {
  year: number;
  month: number;
  date: number;
}

const Calendar = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<IDateState>({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  });
  const totalDateOfMonth: number = new Date(selectedDate.year, selectedDate.month, 0).getDate(); // 선택된 달의 전체 날짜 갯수
  const firstDayOfMonth: number = new Date(selectedDate.year, selectedDate.month - 1, 1).getDay(); // 선택된 달의 시작 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
  const dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  /**
   * 숫자 n을 입력받아 1부터 n까지의 array를 생성해 주는 함수
   * @param {number} n 입력 숫자
   * @returns {number[]} [1, 2, ... , n]
   */
  const createArray1ToN = (n: number) => {
    return Array.from({ length: n }, (_, index) => index + 1);
  };

  /**
   * 이전 달 보기 함수
   */
  const prevMonth = useCallback(() => {
    setSelectedDate((prev) => ({
      year: prev.month === 1 ? prev.year - 1 : prev.year,
      month: prev.month === 1 ? 12 : prev.month - 1,
      date: 1,
    }));
  }, []);

  /**
   * 다음 달 보기 함수
   */
  const nextMonth = useCallback(() => {
    setSelectedDate((prev) => ({
      year: prev.month === 12 ? prev.year + 1 : prev.year,
      month: prev.month === 12 ? 1 : prev.month + 1,
      date: 1,
    }));
  }, []);

  /**
   * 달력의 날짜 클릭 시 해당 날짜로 포커스 시키는 함수
   * @param {number} updatedDate 클릭한 날짜
   */
  const selectDate = useCallback((updatedDate: number) => {
    setSelectedDate((prev) => ({
      ...prev,
      date: updatedDate,
    }));
  }, []);

  return (
    <Container>
      {/* 달력 헤더 영역(달, 년도, 화살표 아이콘) Start */}
      <Header>
        <MonthYear>
          <Month>
            {selectedDate.month < 10 && '0'}
            {selectedDate.month}
          </Month>
          <Year>{selectedDate.year}</Year>
        </MonthYear>

        <div>
          <button type='button' onClick={() => prevMonth()}>
            이전
          </button>
          <button type='button' onClick={() => nextMonth()}>
            다음
          </button>
        </div>
      </Header>
      {/* 달력 헤더 영역(달, 년도, 화살표 아이콘) End */}

      {/* 요일 영역(SUN, MON, ... , SAT) Start */}
      <DayContainer>
        {dayList.map((day: string) => (
          <Day key={day}>{day}</Day>
        ))}
      </DayContainer>
      {/* 요일 영역(SUN, MON, ... , SAT) End */}

      {/* 날짜 영역 Start */}
      <DateNumContainer>
        {/* 빈 칸 */}
        {createArray1ToN(firstDayOfMonth).map((index) => (
          <DateNum key={index} isFocused={false} />
        ))}

        {/* 1 ~ 31 */}
        {createArray1ToN(totalDateOfMonth).map((date) => (
          <DateNum
            key={date}
            isFocused={date === selectedDate.date}
            onClick={() => selectDate(date)}
          >
            {date}
          </DateNum>
        ))}
      </DateNumContainer>
      {/* 날짜 영역 Start */}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const MonthYear = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 600;
  gap: 0.6rem;
`;

const Month = styled.div`
  font-size: 8rem;
  line-height: 6.8rem;
`;

const Year = styled.div`
  font-size: 1.8rem;
`;

const DayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  font-size: 1.4rem;
  font-weight: 600;
  color: #616161; // gray10
  margin-top: 1.4rem;
  margin-bottom: 1.8rem;
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
`;

const DateNumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  font-size: 1.4rem;
  font-weight: 500;
`;

const DateNum =
  styled.div <
  { isFocused: boolean } >
  `
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border: ${(props) => props.isFocused && '2px solid #fc5b3f'};
  border-radius: 100%;
`;

export default Calendar;
