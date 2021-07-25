import styled from 'styled-components';

const ProjectData = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  z-index: 2;
  position: relative;
  overflow: visible;
`;

const Image = styled.img`
  height: 150%;
  position: absolute;
  top: 50%;
  left: 80%;
  opacity: 0.4;
  transform: translate(-50%, -50%);

  ${({ theme }) => theme.mq.standard} {
    left: 50%;
  }

  ${({ theme }) => theme.mq.hdReady} {
    height: 150%;
    top: 50%;
    left: 70%;
    opacity: 1;
  }
`;

const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem;
  text-align: center;

  ${({ theme }) => theme.mq.hdReady} {
    width: auto;
    left: 600px;
    text-align: left;
  }
`;

const ProjectName = styled.h2`
  font-size: 68px;
  color: #fff;
  font-family: Avanti, sans-serif;
  margin: 0;

  ${({ theme }) => theme.mq.hdReady} {
    font-size: 98px;
  }
`;

const Description = styled.p`
  color: #fff;
  font-size: 18px;
`;

export { ProjectData, ProjectName, Image, Content, Description };
