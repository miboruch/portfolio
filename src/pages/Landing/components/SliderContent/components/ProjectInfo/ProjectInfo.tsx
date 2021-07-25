import React from 'react';

import { ProjectModel } from 'types';

import { ProjectData, Image, Content, ProjectName, Description } from './project-info.styles';

interface Props {
  project: ProjectModel;
}

const ProjectInfo: React.FC<Props> = ({ project }) => {
  return (
    <ProjectData>
      {project.image && <Image src={project.image} alt={'Image'} />}
      <Content>
        <ProjectName>{project.name}</ProjectName>
        <Description>{project.description}</Description>
      </Content>
    </ProjectData>
  );
};

export default ProjectInfo;
