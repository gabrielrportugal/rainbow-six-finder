import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }
  body {
    background: #4f4f4f;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font:16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
