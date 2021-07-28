import React from 'react';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const projectRedirect = () => history.push(`/project/${project.id}`);
  const allProjectsRedirect = () => history.push('/projects');

  return (
    <ProjectData>
      {project.image && <Image src={project.image} alt={'Image'} />}
      <Content>
        <ProjectName>{project.name}</ProjectName>
        <Description>{project.description}</Description>
        <MobileOpenProject onClick={projectRedirect}>Open project</MobileOpenProject>
      </Content>
      <CenterLine />
      <Circle>
        <OpenProject onClick={projectRedirect}>Open project</OpenProject>
      </Circle>
      <AllProjects onClick={allProjectsRedirect}>All projects</AllProjects>
    </ProjectData>
  );
};

export default ProjectInfo;
