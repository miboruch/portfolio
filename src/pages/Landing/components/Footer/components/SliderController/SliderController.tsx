import React from 'react';
import styled from 'styled-components';

const ProjectContent = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 3rem;
  margin-bottom: 1rem;
  color: #fff;

  ${({ theme }) => theme.mq.quadHd} {
    width: 500px;
    height: 120px;
    bottom: 1rem;
    left: 1rem;
    background-color: #fff;
    color: #000;
    margin-bottom: 0;
  }
`;

const Next = styled.p`
  letter-spacing: 4px;
  font-size: 12px;
  font-weight: lighter;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
`;

const NextProjectName = styled.p`
  font-family: 'Avanti', sans-serif;
  text-transform: capitalize;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  font-size: 18px;

  ${({ theme }) => theme.mq.quadHd} {
    font-size: 22px;
  }
`;

interface Props {
  currentProject: number;
}

const SliderController: React.FC<Props> = ({ currentProject }) => {
  return (
    <ProjectContent>
      <div>
        <Next>Następny</Next>
        <NextProjectName>Test</NextProjectName>
      </div>
    </ProjectContent>
  );
};

export default SliderController;
