import React, { useState } from 'react';
import styled from 'styled-components';

import SliderContent from './components/SliderContent/SliderContent';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};

  p {
    margin: 0;
  }
`;

const Landing: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  return (
    <Wrapper>
      <SliderContent currentProject={currentProject} setCurrentProject={setCurrentProject} />
    </Wrapper>
  );
};

export default Landing;
