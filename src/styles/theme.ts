import { css } from '@emotion/react';

/**
 * @description 디자인 시스템에 정의되어 있는 디자인 토큰
 * NOTE : 우선 gray 4개랑 기본 색깔만 정의함.
 */

export const theme = {
  color: {
    black: '#000000',

    white: '#ffffff',

    orange: '#fC5b3f',
    red: '#ee3819',

    gray01: '#fcfcfc',
    gray02: '#f5f5f5',
    gray03: 'efefef',
    gray04: 'e8e8e8',
    gray05: 'b7b7b7',
    gray06: '949494',
    gray07: '#777777',
    gray08: '#616161',
    gray09: '#3f3f3f',
    gray10: '#383838',
    gray11: '#2a2a2a',
    gray12: '#1a1a1a',
  },
  font: {
    '80-semibold': css`
      font-size: 8rem;
      font-weight: 600;
      line-height: 9.2rem;
    `,
    '36-bold': css`
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 4.4rem;
    `,
    '34-bold': css`
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 4.4rem;
    `,
    '32-bold': css`
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 4.4rem;
    `,
    '32-semibold': css`
      font-size: 3.2rem;
      font-weight: 600;
      line-height: 4.4rem;
    `,
    '30-bold': css`
      font-size: 3rem;
      font-weight: 700;
      line-height: 4.4rem;
    `,
    '28-bold': css`
      font-size: 2.8rem;
      font-weight: 700;
      line-height: 4.2rem;
    `,
    '26-bold': css`
      font-size: 2.6rem;
      font-weight: 700;
      line-height: 3.8rem;
    `,
    '24-bold': css`
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 2.8rem;
    `,
    '22-bold': css`
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 2.8rem;
    `,
    '20-bold': css`
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.8rem;
    `,
    '18-bold': css`
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2.8rem;
    `,
    '18-semibold': css`
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2.8rem;
    `,
    '18-medium': css`
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 2.8rem;
    `,
    '16-bold': css`
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 2.6rem;
    `,
    '16-semibold': css`
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 2.6rem;
    `,
    '16-medium': css`
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.6rem;
    `,
    '14-semibold': css`
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 2.2rem;
    `,
    '14-bold': css`
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 2.2rem;
    `,
  },
} as const;
