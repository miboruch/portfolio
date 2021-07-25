import styled, { css } from 'styled-components';

interface HamburgerProps {
  isOpen: boolean;
}

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 70px;
  height: 60px;
  background: transparent;
  border: none;
  z-index: 901;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);

  :focus {
    outline: none;
  }
`;

const InnerHamburger = styled.div<HamburgerProps>`
  position: relative;

  ${({ isOpen }) =>
    isOpen &&
    css`
      background: transparent;
    `}

  &::before,
  &::after {
    content: '';
    height: 1px;
    background: #fff;
    position: absolute;
    left: 0;
    transition: all 0.5s ease;
  }

  ::before {
    width: ${({ isOpen }) => (isOpen ? '32px' : '26px')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-2px')};
    transform: rotate(${({ isOpen }) => (isOpen ? '40deg' : '0deg')});
  }
  ::after {
    width: 32px;
    top: ${({ isOpen }) => (isOpen ? '0' : '2px')};
    transform: rotate(${({ isOpen }) => (isOpen ? '-40deg' : '0deg')});
  }
`;

export { StyledHamburger, InnerHamburger };
