import React from 'react';

import { Wrapper, Image } from './project-image.styles';

interface Props {
  image: any;
}

const ProjectImage: React.FC<Props> = ({ image }) => {
  return (
    <Wrapper>
      <Image src={image} alt={'project-image'} />
    </Wrapper>
  );
};

export default ProjectImage;
