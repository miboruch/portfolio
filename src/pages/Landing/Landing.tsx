import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import Footer from './components/Footer/Footer';
import SliderContent from './components/SliderContent/SliderContent';
import { HeaderTemplate } from 'components';

import { Wrapper } from './landing.styles';

const Landing: React.FC = () => {
  const ref = useRef<Slider>(null);

  const [projectIndex, setProjectIndex] = useState<number>(0);

  const handleNextSlide = () => ref && ref.current && ref.current.slickNext();
  const handlePrevSlide = () => ref && ref.current && ref.current.slickPrev();

  return (
    <HeaderTemplate>
      <Wrapper>
        <SliderContent setProjectIndex={setProjectIndex} ref={ref} />
        <Footer projectIndex={projectIndex} handleNextSlide={handleNextSlide} handlePrevSlide={handlePrevSlide} />
      </Wrapper>
    </HeaderTemplate>
  );
};

export default Landing;
