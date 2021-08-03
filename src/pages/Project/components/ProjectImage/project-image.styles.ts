import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  place-items: center;
`;

const Image = styled.img`
  height: inherit;
`;

export { Wrapper, Image };
