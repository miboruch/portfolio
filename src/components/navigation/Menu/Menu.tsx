import React, { useMemo } from 'react';

import { Hamburger } from 'components/index';
import { useWindowDimensions } from 'components/hooks';

import { MenuBox, MenuWrapper, Text } from './menu.styles';

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<Props> = ({ isOpen, toggleMenu }) => {
  const { width, height } = useWindowDimensions();

  const scales = useMemo(() => {
    const x = 355 / width;
    const y = 60 / height;

    return { x, y };
  }, [width, height]);

  return (
    <>
      <MenuBox onClick={toggleMenu}>
        <Text>Web design & code</Text>
        <Hamburger isOpen={isOpen} />
      </MenuBox>
      <MenuWrapper isOpen={isOpen} scaleX={scales.x} scaleY={scales.y}>
        <p>Projects</p>
        <p>About me</p>
      </MenuWrapper>
    </>
  );
};

export default Menu;
