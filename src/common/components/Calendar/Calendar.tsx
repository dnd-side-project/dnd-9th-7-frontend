import React, { useState, useCallback, useRef } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';

const Calendar = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
  };
  const [selectedDate, setSelectedDate] = useState<{ year: number, month: number, date: number }>({
    year: today.year,
    month: today.month,
    date: today.date,
  });
  const totalDateOfMonth: number = new Date(selectedDate.year, selectedDate.month, 0).getDate(); // 선택된 달의 전체 날짜 갯수
  const firstDayOfMonth: number = new Date(selectedDate.year, selectedDate.month - 1, 1).getDay(); // 선택된 달의 시작 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
  const dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const dateNumListFrameRef = useRef<null | HTMLDivElement>(null);
  const dateNumListRef = useRef<null | HTMLDivElement>(null);
  const [isRecordListShown, setIsRecordListShown] = useState(false);

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
  const selectDate = useCallback(
    (updatedDate: number) => {
      setSelectedDate((prev) => ({
        ...prev,
        date: updatedDate,
      }));

      setIsRecordListShown(true);

      //   console.log(Math.floor((firstDayOfMonth + updatedDate - 1) / 7));
      const upValue = Math.floor((firstDayOfMonth + updatedDate - 1) / 7) * 49;
      //   console.log(upValue);
      if (dateNumListFrameRef.current && dateNumListRef.current) {
        dateNumListFrameRef.current.style.maxHeight = '49px';

        dateNumListRef.current.style.transform = `translateY(${-upValue}px)`;
      }
    },
    [firstDayOfMonth],
  );

  return (
    <StyledCalendar>
      {/* 달력 헤더 영역(달, 년도, 화살표 아이콘) Start */}
      <StyledCalendarHeader>
        <StyledMonthYear>
          <StyledMonth>
            {selectedDate.month < 10 && '0'}
            {selectedDate.month}
          </StyledMonth>
          <StyledYear>{selectedDate.year}</StyledYear>
        </StyledMonthYear>

        <div>
          <button type='button' onClick={() => prevMonth()}>
            이전
          </button>
          <button type='button' onClick={() => nextMonth()}>
            다음
          </button>
        </div>
      </StyledCalendarHeader>
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

      <AnimatePresence>
        {isRecordListShown && (
          <StyledRecordList
            variants={recordListVar}
            initial='invisible'
            animate='visible'
            exit='exit'
          >
            {[0, 1, 2].map((record: number) => (
              <StyledRecord key={record}>
                <StyledRecordImage />
                <div>
                  <StyledRecordTitle>WONDERWALL</StyledRecordTitle>
                  <StyledRecordArtist>OASIS</StyledRecordArtist>
                </div>
              </StyledRecord>
            ))}
          </StyledRecordList>
        )}
      </AnimatePresence>
    </StyledCalendar>
  );
};

const StyledCalendar = styled.div`
  width: 100%;
  color: ${(props) => props.theme.color.white};
  padding-bottom: 15rem;
`;

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
  gap: 0.6rem;
`;

const StyledMonth = styled.div`
  font-size: 8rem;
  line-height: 6.8rem;
`;

const StyledYear = styled.div`
  font-size: 1.8rem;
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

const StyledDateNum =
  styled.div <
  { isSelected: boolean, isToday: boolean } >
  `
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

const StyledRecordList = styled(motion.div)`
  width: 100%;
  /* height: 100rem; */
  margin-top: 2rem;
  /* background-color: ${(props) => props.theme.color.gray11}; */
`;

const StyledRecord = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.color.gray08};
  padding: 1.2rem 1rem;
`;

const StyledRecordImage = styled.div`
  width: 6.4rem;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.theme.color.gray11};
  margin-right: 1.6rem;
`;

const StyledRecordTitle = styled.div`
  ${(props) => props.theme.font.bold16}
`;

const StyledRecordArtist = styled.div`
  ${(props) => props.theme.font.medium14}
  color: ${(props) => props.theme.color.gray08};
`;

const recordListVar = {
  invisible: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default Calendar;
