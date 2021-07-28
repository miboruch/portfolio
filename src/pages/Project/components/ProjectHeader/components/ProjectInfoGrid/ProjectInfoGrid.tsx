import React from 'react';

import { ProjectModel } from 'types';

import { Wrapper, Heading } from './project-info-grid.styles';

interface Props {
  project: ProjectModel;
}

const ProjectInfoGrid: React.FC<Props> = ({ project }) => {
  const { status, category, platform, technology } = project;

  const gridData = [
    { name: 'Kategoria', value: category },
    { name: 'Technologia', value: technology },
    { name: 'Status', value: status },
    { name: 'Platforma', value: platform }
  ];

  return (
    <Wrapper>
      {gridData.map(({ name, value }) => (
        <div key={name}>
          <Heading>{name}</Heading>
          <p>{value}</p>
        </div>
      ))}
    </Wrapper>
  );
};

export default ProjectInfoGrid;
