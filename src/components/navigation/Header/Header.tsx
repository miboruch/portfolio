import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'components';
import { HeaderTheme } from 'types';

import { StyledHeader, FlexWrapper } from './header.styles';
import { DesktopLogo, MobileLogo, MobileBlackLogo, DesktopBlackLogo } from 'styles';

interface Props {
  theme: HeaderTheme;
}

const Header: React.FC<Props> = ({ theme }) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  const isLightTheme = theme === 'light';

  return (
    <StyledHeader>
      <Link to={'/'}>
        {isLightTheme ? <MobileLogo /> : <MobileBlackLogo />}
        {isLightTheme ? <DesktopLogo /> : <DesktopBlackLogo />}
      </Link>
      <FlexWrapper colorTheme={theme}>
        <p>Kraków, Polska</p>
        <p>+48 783 271 883</p>
      </FlexWrapper>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </StyledHeader>
  );
};

export default Header;
