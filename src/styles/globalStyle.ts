import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
  }

  .App {
    display: flex;
    height: calc(100vh - 60px);
    width: 100vw;
  }
`;
