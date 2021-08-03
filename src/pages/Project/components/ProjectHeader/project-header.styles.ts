import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 4rem 0 4rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  ${({ theme }) => theme.mq.standard} {
    flex-direction: row;
    gap: 4rem;
    margin-bottom: 5rem;
  }
`;

const Date = styled.p`
  font-size: 14px;
  letter-spacing: 2px;
  color: #2d2d2d;
`;

export { Wrapper, Date };
