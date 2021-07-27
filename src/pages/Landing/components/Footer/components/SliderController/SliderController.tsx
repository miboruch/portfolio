import React from 'react';

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
  currentProject: number;
  handleNextSlide: () => void;
  handlePrevSlide: () => void;
}

const SliderController: React.FC<Props> = ({ currentProject, handleNextSlide, handlePrevSlide }) => {
  return (
    <ProjectContent>
      <div>
        <Next>Następny</Next>
        <NextProjectName>Test</NextProjectName>
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
