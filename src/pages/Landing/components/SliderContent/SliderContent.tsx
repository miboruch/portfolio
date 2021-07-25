import React from 'react';
import { Settings } from 'react-slick';

import ProjectInfo from './components/ProjectInfo/ProjectInfo';
import { projectData } from 'static/project-data';

import { StyledSlider } from './slider-content.styles';

interface Props {
  currentProject: number;
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

const SliderContent: React.FC<Props> = ({ currentProject, setCurrentProject }) => {
  return (
    <StyledSlider
      {...settings}
      beforeChange={(oldIndex, nextSlide) => setCurrentProject(nextSlide)}
      afterChange={(current) => setCurrentProject(current)}
    >
      {projectData.map((project) => (
        <ProjectInfo key={project.id} project={project} />
      ))}
    </StyledSlider>
  );
};

export default SliderContent;
