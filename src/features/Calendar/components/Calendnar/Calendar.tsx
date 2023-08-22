import { useState, useCallback, useRef, Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import CalendarHeader from './CalendarHeader';

interface Props {
  setIsRecordListShown: Dispatch<SetStateAction<boolean>>;
}

const Calendar = ({ setIsRecordListShown }: Props) => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  };
  const [selectedDate, setSelectedDate] = useState<{ year: number; month: number; date: number }>({
    year: today.year,
    month: today.month,
    date: today.date,
  });
  const totalDateOfMonth: number = new Date(selectedDate.year, selectedDate.month, 0).getDate(); // 선택된 달의 전체 날짜 갯수
  const firstDayOfMonth: number = new Date(selectedDate.year, selectedDate.month - 1, 1).getDay(); // 선택된 달의 시작 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
  const dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const dateNumListFrameRef = useRef<null | HTMLDivElement>(null);
  const dateNumListRef = useRef<null | HTMLDivElement>(null);

  /**
   * 숫자 n을 입력받아 1부터 n까지의 array를 생성해 주는 함수
   * @param {number} n 입력 숫자
   * @returns {number[]} [1, 2, ... , n]
   */
  const createArray1ToN = (n: number) => {
    return Array.from({ length: n }, (_, index) => index + 1);
  };

  /**
   * 달력의 날짜 클릭 시 해당 날짜로 포커스 시키는 함수
   * @param {number} updatedDate 클릭한 날짜
   */
  const selectDate = useCallback(
    (updatedDate: number) => {
      setSelectedDate((prev) => ({
        ...prev,
        date: updatedDate,
      }));

      setIsRecordListShown(true);

      // console.log(Math.floor((firstDayOfMonth + updatedDate - 1) / 7));
      const upValue = Math.floor((firstDayOfMonth + updatedDate - 1) / 7) * 49;
      // console.log(upValue);
      if (dateNumListFrameRef.current && dateNumListRef.current) {
        dateNumListFrameRef.current.style.maxHeight = '49px';

        dateNumListRef.current.style.transform = `translateY(${-upValue}px)`;
      }
    },
    [firstDayOfMonth, setIsRecordListShown],
  );

  return (
    <StyledCalendar>
      {/* 달력 헤더 영역(달, 년도, 화살표 아이콘) Start */}
      <CalendarHeader selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {/* 달력 헤더 영역(달, 년도, 화살표 아이콘) End */}

      {/* 요일 영역(SUN, MON, ... , SAT) Start */}
      <StyledDayList>
        {dayList.map((day: string) => (
          <StyledDay key={day}>{day}</StyledDay>
        ))}
      </StyledDayList>
      {/* 요일 영역(SUN, MON, ... , SAT) End */}

      {/* 날짜 영역 Start */}
      <StyledDateNumListFrame ref={dateNumListFrameRef}>
        <StyledDateNumList ref={dateNumListRef}>
          {/* 빈 칸 */}
          {createArray1ToN(firstDayOfMonth).map((index) => (
            <StyledDateNum key={index} isSelected={false} isToday={false} />
          ))}

          {/* 1 ~ 31 */}
          {createArray1ToN(totalDateOfMonth).map((date) => (
            <div key={date}>
              <StyledDateNum
                onClick={() => selectDate(date)}
                isSelected={date === selectedDate.date}
                isToday={
                  today.year === selectedDate.year &&
                  today.month === selectedDate.month &&
                  today.date === date
                }
              >
                {date}
              </StyledDateNum>
            </div>
          ))}
        </StyledDateNumList>
      </StyledDateNumListFrame>
      {/* 날짜 영역 End */}
    </StyledCalendar>
  );
};

const StyledCalendar = styled.div`
  width: 100%;
  color: ${(props) => props.theme.color.white};
  /* padding-bottom: 15rem; */
`;

const StyledDayList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.gray08};
  padding: 3rem 0 2rem 0;
`;

const StyledDay = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledDateNumListFrame = styled.div`
  max-height: 100vh;
  overflow: hidden;
  transition: max-height 0.4s linear;
  /* background-color: indigo; */
`;

const StyledDateNumList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  font-size: 1.4rem;
  font-weight: 500;
  transition: transform 0.4s linear;
`;

const StyledDateNum = styled.div<{ isSelected: boolean; isToday: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;
  border: ${(props) => props.isSelected && `2px solid ${props.theme.color.orange}`};
  background-color: ${(props) => props.isToday && props.theme.color.gray11};
  border-radius: 100%;
  transition: border 0.1s ease-in-out;
  cursor: pointer;
`;

export default Calendar;
