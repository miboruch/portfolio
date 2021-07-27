import React from 'react';
import Slider, { Settings } from 'react-slick';

import ProjectInfo from './components/ProjectInfo/ProjectInfo';
import { projectData } from 'static/project-data';

import { StyledSlider } from './slider-content.styles';

interface Props {
  setCurrentProject: React.Dispatch<React.SetStateAction<number>>;
}

const settings: Settings = {
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'cubic-bezier(.84, 0, .08, .99)'
};

const SliderContent = React.forwardRef<Slider, Props>(({ setCurrentProject }, ref) => {
  const beforeChange = (oldIndex: number, nextIndex: number) => setCurrentProject(nextIndex);
  const afterChange = (currentIndex: number) => setCurrentProject(currentIndex);

  return (
    <StyledSlider {...settings} ref={ref} beforeChange={beforeChange} afterChange={afterChange}>
      {projectData.map((project) => (
        <ProjectInfo key={project.id} project={project} />
      ))}
    </StyledSlider>
  );
});

SliderContent.displayName = 'SliderContent';

export default SliderContent;
