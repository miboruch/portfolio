import styled, { css } from 'styled-components';

interface MenuProps {
  isOpen: boolean;
  scaleX: number;
  scaleY: number;
}

const MenuBox = styled.div`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  width: 360px;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.menuBackground};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  z-index: 21;
`;

const MenuWrapper = styled.div<MenuProps>`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  width: calc(100vw - 1rem);
  height: calc(100vh - 1rem);
  background-color: ${({ theme }) => theme.colors.menuBackground};
  transform: scale(${({ scaleX, scaleY }) => `${scaleX}, ${scaleY}`});
  transition: transform 0.5s ease, outline-width 0.2s 0.5s ease;
  transform-origin: top right;
  z-index: 20;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: scale(1, 1);
      outline: #fff solid 5px;
    `}
`;

const Text = styled.p`
  font-size: 12px;
  color: #fff;
  padding-left: 2rem;
  margin: auto 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export { MenuBox, MenuWrapper, Text };