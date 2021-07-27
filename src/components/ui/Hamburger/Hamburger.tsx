import React from 'react';

import { StyledHamburger, InnerHamburger } from './hamburger.styles';

interface Props {
  isOpen: boolean;
}

const Hamburger: React.FC<Props> = ({ isOpen }) => {
  return (
    <StyledHamburger>
      <InnerHamburger isOpen={isOpen} />
    </StyledHamburger>
  );
};

export default Hamburger;
