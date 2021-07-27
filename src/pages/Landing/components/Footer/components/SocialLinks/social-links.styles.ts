import styled from 'styled-components';

const Row = styled.div`
  position: absolute;
  bottom: 4rem;
  right: 3rem;
  display: none;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;

  ${({ theme }) => theme.mq.quadHd} {
    display: flex;
  }
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

const Paragraph = styled.p`
  color: #fff;
  margin: 0 2rem;
`;

export { Row, Link, Paragraph };
