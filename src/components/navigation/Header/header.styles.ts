import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 16;
  padding-left: 4rem;
  padding-right: 2rem;
`;

const FlexWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  margin-right: 380px;
  color: #fff;
  display: none;

  ${({ theme }) => theme.mq.tabletL} {
    display: flex;
  }
`;

export { StyledHeader, FlexWrapper };
