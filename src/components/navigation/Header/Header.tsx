import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'components/index';

import { DesktopLogo, MobileLogo } from 'styles';
import { StyledHeader, FlexWrapper } from './header.styles';

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <StyledHeader>
      <Link to={'/'}>
        <MobileLogo />
        <DesktopLogo />
      </Link>
      <FlexWrapper>
        <p>Kraków, Polska</p>
        <p>+48 783 271 883</p>
      </FlexWrapper>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </StyledHeader>
  );
};

export default Header;
