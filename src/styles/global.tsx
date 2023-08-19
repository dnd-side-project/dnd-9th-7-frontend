import { Global, css } from '@emotion/react';
import './fonts/font.css';

const globalCss = css`
  * {
    font-family: 'Pretendard', sans-serif;
  }
  html {
    font-size: 62.5%;
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;

export const GlobalStyle = () => <Global styles={globalCss} />;
