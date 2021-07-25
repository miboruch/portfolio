import React, { useState } from 'react';

import { Menu } from 'components/index';

import { StyledHeader } from './header.styles';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <StyledHeader>
      <p>Michał Boruch</p>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </StyledHeader>
  );
};

export default Header;
