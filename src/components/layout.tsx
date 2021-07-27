import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from 'styles';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Layout;
