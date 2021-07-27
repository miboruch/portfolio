import React, { useMemo, useCallback, useState } from 'react';

import MenuItem from './components/MenuItem/MenuItem';
import { Hamburger } from 'components/index';
import { useWindowDimensions } from 'components/hooks';
import { menuItems } from './menu-items';

import { MenuBox, MenuWrapper, Text } from './menu.styles';

type ButtonSize = {
  width: number;
  height: number;
};

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<Props> = ({ isOpen, toggleMenu }) => {
  const { width, height } = useWindowDimensions();

  const [menuButtonSize, setMenuButtonSize] = useState<ButtonSize>({ width: 0, height: 0 });

  const handleCurrentSize = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        const { width, height } = node.getBoundingClientRect();
        setMenuButtonSize({ width, height });
      }
    },
    [width]
  );

  const scales = useMemo(() => {
    const x = menuButtonSize.width / width;
    const y = menuButtonSize.height / height;

    return { x, y };
  }, [width, height, menuButtonSize]);

  return (
    <>
      <MenuBox onClick={toggleMenu} ref={handleCurrentSize}>
        <Text>Web design & code</Text>
        <Hamburger isOpen={isOpen} />
      </MenuBox>
      <MenuWrapper isOpen={isOpen} scaleX={scales.x} scaleY={scales.y}>
        {menuItems.map(({ name, link }) => (
          <MenuItem key={name} name={name} link={link} />
        ))}
      </MenuWrapper>
    </>
  );
};

export default Menu;
