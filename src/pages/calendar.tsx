import React, { useState } from 'react';
import styled from '@emotion/styled';

const Calendar = () => {
  const today = new Date();
  const dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);

  const totalDate: number = new Date(selectedYear, selectedMonth, 0).getDate(); // 선택된 달의 전체 날짜 갯수
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); // 선택된 달의 첫 번째 날
  const firstDayOfWeek: number = firstDayOfMonth.getDay(); // 첫 번째 날의 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)

  /**
   * 숫자 n을 입력받아 1부터 n까지의 array를 생성해 주는 함수
   * @param {number} n 입력 숫자
   * @returns {number[]} [1, 2, ... , n]
   */
  const createArray1ToN = (n: number) => {
    return Array.from({ length: n }, (_, index) => index + 1);
  };

  return (
    <Container>
      {/* 달력 헤더 영역(달, 년도, 화살표 아이콘) Start */}
      <MonthYear>
        <Month>
          {selectedMonth < 10 && '0'}
          {selectedMonth}
        </Month>
        <Year>{selectedYear}</Year>
      </MonthYear>
      {/* 달력 헤더 영역(달, 년도, 화살표 아이콘) End */}

      {/* 요일 영역(SUN, MON, ... , SAT) Start */}
      <DayList>
        {dayList.map((day: string) => (
          <Day key={day}>{day}</Day>
        ))}
      </DayList>
      {/* 요일 영역(SUN, MON, ... , SAT) End */}

      {/* 날짜 영역 Start */}
      <DateNumContainer>
        {/* 빈 칸 */}
        {createArray1ToN(firstDayOfWeek).map((index) => (
          <DateNum key={index} />
        ))}

        {/* 1 ~ 31 */}
        {createArray1ToN(totalDate).map((date) => (
          <DateNum key={date}>{date}</DateNum>
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

const DayList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  font-size: 1.4rem;
  font-weight: 600;
  color: #616161; // gray10
  margin-top: 1.4rem;
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

const DateNum = styled.div`
  display: flex;
  justify-content: center;
`;

export default Calendar;
