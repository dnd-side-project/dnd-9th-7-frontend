/* eslint-disable @typescript-eslint/no-explicit-any */

// NOTE: DateValue를 Date 안에 인자와 타입 충돌이 나서 any 로 해결
export const useformatDate = (dateString: any) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}.${month}.${day}`;
};
