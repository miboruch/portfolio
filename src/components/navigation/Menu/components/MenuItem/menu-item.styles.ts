import styled from 'styled-components';

const Item = styled.div`
  width: 100%;
  height: calc(100% / 3);
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  font-size: 60px;
  display: grid;
  place-items: center;
  color: rgba(255, 255, 255, 0.4);
  font-family: Avanti, sans-serif;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export { Item };
