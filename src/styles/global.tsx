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
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const GlobalStyle = () => <Global styles={globalCss} />;
