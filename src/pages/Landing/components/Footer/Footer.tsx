import React from 'react';

import SocialLinks from './components/SocialLinks/SocialLinks';
import SliderController from './components/SliderController/SliderController';

import { Wrapper } from './footer.styles';

interface Props {
  currentProject: number;
  handleNextSlide: () => void;
  handlePrevSlide: () => void;
}

const Footer: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <SliderController {...props} />
      <SocialLinks />
    </Wrapper>
  );
};

export default Footer;
