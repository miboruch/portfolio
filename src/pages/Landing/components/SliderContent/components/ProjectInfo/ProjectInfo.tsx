import React from 'react';

import { ProjectModel } from 'types';

import {
  ProjectData,
  Image,
  Content,
  ProjectName,
  Description,
  CenterLine,
  OpenProject,
  Circle,
  AllProjects,
  MobileOpenProject
} from './project-info.styles';

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
        <MobileOpenProject>Open project</MobileOpenProject>
      </Content>
      <CenterLine />
      <Circle>
        <OpenProject>Open project</OpenProject>
      </Circle>
      <AllProjects>All projects</AllProjects>
    </ProjectData>
  );
};

export default ProjectInfo;
