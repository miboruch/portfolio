import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  grid-template-rows: 50px 50px;
  gap: 2rem;

  ${({ theme }) => theme.mq.standard} {
    grid-template-columns: 160px 160px;
    grid-template-rows: 80px 80px;
  }
`;

const Heading = styled.p`
  //TODO: font-weight bold
  font-family: Avanti, sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export { Wrapper, Heading };
