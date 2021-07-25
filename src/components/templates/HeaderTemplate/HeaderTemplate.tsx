import React from 'react';

import { Header } from 'components';

interface Props {
  children: React.ReactNode;
}

const HeaderTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderTemplate;
