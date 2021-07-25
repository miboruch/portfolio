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
}

const SliderController: React.FC<Props> = ({ currentProject }) => {
  return (
    <ProjectContent>
      <div>
        <Next>Następny</Next>
        <NextProjectName>Test</NextProjectName>
      </div>
      <FlexWrapper>
        <ArrowButton>
          <LeftArrow />
        </ArrowButton>
        <ArrowButton>
          <RightArrow />
        </ArrowButton>
      </FlexWrapper>
    </ProjectContent>
  );
};

export default SliderController;
