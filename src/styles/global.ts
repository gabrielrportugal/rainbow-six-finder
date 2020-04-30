import { createGlobalStyle } from 'styled-components';

import rainbowSixBackground from '../assets/rainbow-background.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
  background: #4f4f4f url(${rainbowSixBackground}) no-repeat;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font:16px Roboto, sans-serif;
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px  20px;
  }

  button {
    cursor: pointer;
  }
`;
