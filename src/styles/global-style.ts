import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
  }

  html, body{
    margin: 0;
    padding: 0;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    color: #000;
    font-family: 'Futura', sans-serif;
    font-weight: 400;
  }

  h1{
    margin: 0;
  }

  a {
    text-decoration: none !important;
  }

  .no-select {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  }
`;

export default GlobalStyle;
