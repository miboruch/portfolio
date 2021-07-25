import React from 'react';

import { ProjectModel } from 'types';

import { ProjectData } from './project-info.styles';

interface Props {
  project: ProjectModel;
}

const ProjectInfo: React.FC<Props> = ({ project }) => {
  return (
    <ProjectData>
      <p>{project.name}</p>
    </ProjectData>
  );
};

export default ProjectInfo;
