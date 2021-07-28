import styled from 'styled-components';

import { HeaderTheme } from 'types';

const StyledHeader = styled.header`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 16;
  padding-left: 4rem;
  padding-right: 2rem;
`;

const FlexWrapper = styled.div<{ colorTheme: HeaderTheme }>`
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  margin-right: 320px;
  color: ${({ colorTheme }) => (colorTheme === 'light' ? '#fff' : '#0E0E0C')};
  display: none;

  ${({ theme }) => theme.mq.tabletL} {
    display: flex;
  }

  ${({ theme }) => theme.mq.hdReady} {
    margin-right: 380px;
  }
`;

export { StyledHeader, FlexWrapper };
