import React from 'react';

import { nextArrayElement } from 'utils/functions';
import { ProjectModel } from 'types';
import { projectData } from 'static/project-data';

import {
  ProjectContent,
  Next,
  NextProjectName,
  FlexWrapper,
  ArrowButton,
  LeftArrow,
  RightArrow
} from './slider-controller.styles';

interface Props {
  projectIndex: number;
  handleNextSlide: () => void;
  handlePrevSlide: () => void;
}

const SliderController: React.FC<Props> = ({ projectIndex, handleNextSlide, handlePrevSlide }) => {
  const { name } = nextArrayElement<ProjectModel>(projectData, projectIndex);

  return (
    <ProjectContent>
      <div>
        <Next>Następny</Next>
        <NextProjectName>{name}</NextProjectName>
      </div>
      <FlexWrapper>
        <ArrowButton onClick={handlePrevSlide}>
          <LeftArrow />
        </ArrowButton>
        <ArrowButton onClick={handleNextSlide}>
          <RightArrow />
        </ArrowButton>
      </FlexWrapper>
    </ProjectContent>
  );
};

export default SliderController;
