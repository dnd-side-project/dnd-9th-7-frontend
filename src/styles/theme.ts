import { css } from '@emotion/react';

export const theme = {
  color: {
    black: '#000000',

    white: '#ffffff',

    orange: '#fC5b3f',
    red: '#ee3819',

    gray01: '#fcfcfc',
    gray02: '#f5f5f5',
    gray03: 'efefef',
    gray04: '#e8e8e8',
    gray05: '#b7b7b7',
    gray06: '#949494',
    gray07: '#777777',
    gray08: '#616161',
    gray09: '#3f3f3f',
    gray10: '#383838',
    gray11: '#2a2a2a',
    gray12: '#1a1a1a',

    transparency01: 'rgba(255, 255, 255, 0.63)',
    transparency02: 'rgba(255, 255, 255, 0.50)',
    transparency03: 'rgba(255, 255, 255, 0.35)',
    transparency04: 'rgba(255, 255, 255, 0.20)',
    transparency05: 'rgba(68, 68, 68, 0.50)',
    transparency06: 'rgba(44, 44, 44, 0.80)',
    transparency07: 'rgba(0, 0, 0, 0.85)',
  },
  font: {
    semibold80: css`
      font-size: 8rem;
      font-weight: 600;
      line-height: 9.2rem;
    `,
    bold36: css`
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 4.4rem;
    `,
    bold34: css`
      font-size: 3.4rem;
      font-weight: 700;
      line-height: 4.4rem;
    `,
    bold32: css`
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 4.4rem;
    `,
    semibold32: css`
      font-size: 3.2rem;
      font-weight: 600;
      line-height: 4.4rem;
    `,
    bold30: css`
      font-size: 3rem;
      font-weight: 700;
      line-height: 4.4rem;
    `,
    bold28: css`
      font-size: 2.8rem;
      font-weight: 700;
      line-height: 4.2rem;
    `,
    bold26: css`
      font-size: 2.6rem;
      font-weight: 700;
      line-height: 3.8rem;
    `,
    bold24: css`
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 2.8rem;
    `,
    bold22: css`
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 2.8rem;
    `,
    bold20: css`
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.8rem;
    `,
    bold18: css`
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2.8rem;
    `,
    semibold18: css`
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.8rem;
    `,
    medium18: css`
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 2.8rem;
    `,
    bold16: css`
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 2.6rem;
    `,
    semibold16: css`
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 2.6rem;
    `,
    medium16: css`
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.6rem;
    `,
    medium14: css`
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.2rem;
    `,
    semibold14: css`
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 2.2rem;
    `,
    bold14: css`
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 2.2rem;
    `,
  },
} as const;
