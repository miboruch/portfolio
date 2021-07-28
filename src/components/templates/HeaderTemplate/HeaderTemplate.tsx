import React from 'react';

import { Header } from 'components';
import { HeaderTheme } from 'types';

interface Props {
  children: React.ReactNode;
  theme?: HeaderTheme;
}

const HeaderTemplate: React.FC<Props> = ({ children, theme = 'light' }) => {
  return (
    <>
      <Header theme={theme} />
      {children}
    </>
  );
};

export default HeaderTemplate;
