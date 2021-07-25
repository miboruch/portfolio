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
  z-index: 2;

  ${({ theme }) => theme.mq.standard} {
    left: 50%;
  }

  ${({ theme }) => theme.mq.quadHd} {
    height: 120%;
    top: 50%;
    left: 70%;
    opacity: 1;
  }
`;

const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 4rem;
  text-align: center;
  z-index: 3;

  ${({ theme }) => theme.mq.quadHd} {
    width: auto;
    left: 550px;
    padding: 0;
    text-align: left;
    gap: 2rem;
  }
`;

const ProjectName = styled.h2`
  font-size: 68px;
  color: #fff;
  font-family: Avanti, sans-serif;
  margin: 0;

  ${({ theme }) => theme.mq.quadHd} {
    font-size: 98px;
  }
`;

const Description = styled.p`
  color: #fff;
  font-size: 18px;
  margin-bottom: 3rem;

  ${({ theme }) => theme.mq.quadHd} {
    max-width: 400px;
    word-wrap: break-word;
    margin-bottom: 0;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  place-items: center;
  position: absolute;
  top: 50%;
  left: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transform: translateY(-50%);
  display: none;

  ${({ theme }) => theme.mq.quadHd} {
    display: grid;
  }
`;

const OpenProject = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.background};
  color: #fff;
  cursor: pointer;
  display: none;

  ${({ theme }) => theme.mq.standard} {
    text-align: right;
    margin: unset;
  }

  ${({ theme }) => theme.mq.quadHd} {
    display: block;
  }
`;

const MobileOpenProject = styled(OpenProject)`
  display: block;
  background-color: transparent;
  text-align: center;
  text-decoration: underline;

  ${({ theme }) => theme.mq.quadHd} {
    display: none;
  }
`;

const CenterLine = styled.div`
  display: none;

  ${({ theme }) => theme.mq.quadHd} {
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const AllProjects = styled.p`
  display: none;
  position: absolute;
  top: 47.5%;
  right: 0;
  transform: translateY(-50%);
  border-bottom: 1px solid #fff;
  padding-right: 2rem;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 3;

  ${({ theme }) => theme.mq.quadHd} {
    display: block;
  }
`;

export { ProjectData, ProjectName, Image, Content, Description, CenterLine, Circle, OpenProject, AllProjects, MobileOpenProject };
