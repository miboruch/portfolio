import styled, { css } from 'styled-components';

import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import { ReactComponent as LogoSquareIcon } from 'assets/icons/logo-square.svg';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';

const maxLengthParagraph = (length: number) => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${length}px;
`;

const Logo = styled(LogoIcon)`
  width: 150px;
  cursor: pointer;
`;

const LogoSquare = styled(LogoSquareIcon)`
  width: 80px;
`;

const Arrow = styled(ArrowIcon)`
  width: 70px;
  cursor: pointer;
  stroke: #fff;
  fill: #fff;

  ${({ theme }) => theme.mq.quadHd} {
    stroke: #000;
    fill: #000;
  }
`;

export { maxLengthParagraph, Logo, LogoSquare, Arrow };
