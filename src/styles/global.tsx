import { Global, css } from '@emotion/react';

const globalCss = css`
  html {
    font-size: 62.5%;
  }
`;

export const GlobalStyle = () => <Global styles={globalCss} />;
