import React, { useState } from 'react';

import SliderContent from './components/SliderContent/SliderContent';

import { Wrapper } from './landing.styles';

const Landing: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  return (
    <Wrapper>
      <SliderContent setCurrentProject={setCurrentProject} />
    </Wrapper>
  );
};

export default Landing;
