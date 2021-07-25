import React, { useState } from 'react';

import Footer from './components/Footer/Footer';
import SliderContent from './components/SliderContent/SliderContent';

import { Wrapper } from './landing.styles';

const Landing: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<number>(0);

  return (
    <Wrapper>
      <SliderContent setCurrentProject={setCurrentProject} />
      <Footer currentProject={currentProject} />
    </Wrapper>
  );
};

export default Landing;
