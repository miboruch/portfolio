import styled, { css } from 'styled-components';

import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg';
import { ReactComponent as LogoSquareIcon } from 'assets/icons/logo-square.svg';
import { ReactComponent as LogoBlackIcon } from 'assets/icons/logo-black.svg';
import { ReactComponent as LogoSquareBlackIcon } from 'assets/icons/logo-square-black.svg';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';

const maxLengthParagraph = (length: number) => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${length}px;
`;

const desktopLogo = css`
  width: 150px;
  cursor: pointer;
  display: none;

  ${({ theme }) => theme.mq.tabletS} {
    display: block;
  }
`;

const mobileLogo = css`
  width: 80px;
  display: block;
  fill: #000;

  ${({ theme }) => theme.mq.tabletS} {
    display: none;
  }
`;

const DesktopLogo = styled(LogoIcon)`
  ${desktopLogo};
`;

const DesktopBlackLogo = styled(LogoBlackIcon)`
  ${desktopLogo};
`;

const MobileLogo = styled(LogoSquareIcon)`
  ${mobileLogo};
`;

const MobileBlackLogo = styled(LogoSquareBlackIcon)`
  ${mobileLogo}
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

export { maxLengthParagraph, DesktopLogo, MobileLogo, DesktopBlackLogo, MobileBlackLogo, Arrow };
