import '@emotion/react';
import { theme } from './theme';

type ThemeType = typeof theme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
  export interface Theme extends ThemeType {}
}
