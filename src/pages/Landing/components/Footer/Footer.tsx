import React from 'react';

import SliderController from './components/SliderController/SliderController';

import { Wrapper } from './footer.styles';

interface Props {
  currentProject: number;
}

const Footer: React.FC<Props> = ({ currentProject }) => {
  return (
    <Wrapper>
      <SliderController currentProject={currentProject} />
      {/*TODO: social links*/}
    </Wrapper>
  );
};

export default Footer;
