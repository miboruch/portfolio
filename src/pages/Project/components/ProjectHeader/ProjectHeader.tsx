import React from 'react';

import ProjectInfoGrid from './components/ProjectInfoGrid/ProjectInfoGrid';
import { ProjectModel } from 'types';

import { Wrapper, Date } from './project-header.styles';

interface Props {
  project: ProjectModel;
}

const ProjectHeader: React.FC<Props> = ({ project }) => {
  return (
    <Wrapper>
      <Date>{project.period}</Date>
      <ProjectInfoGrid project={project} />
    </Wrapper>
  );
};

export default ProjectHeader;
