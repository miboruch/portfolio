import React from 'react';

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
      {/*TODO: social links*/}
    </Wrapper>
  );
};

export default Footer;
