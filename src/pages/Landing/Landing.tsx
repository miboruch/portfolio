import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import Footer from './components/Footer/Footer';
import { HeaderTemplate } from 'components';
import SliderContent from './components/SliderContent/SliderContent';

import { Wrapper } from './landing.styles';

const Landing: React.FC = () => {
  const ref = useRef<Slider>(null);

  const [currentProject, setCurrentProject] = useState<number>(0);

  const handleNextSlide = () => ref && ref.current && ref.current.slickNext();
  const handlePrevSlide = () => ref && ref.current && ref.current.slickPrev();

  return (
    <HeaderTemplate>
      <Wrapper>
        <SliderContent setCurrentProject={setCurrentProject} ref={ref} />
        <Footer currentProject={currentProject} handleNextSlide={handleNextSlide} handlePrevSlide={handlePrevSlide} />
      </Wrapper>
    </HeaderTemplate>
  );
};

export default Landing;
