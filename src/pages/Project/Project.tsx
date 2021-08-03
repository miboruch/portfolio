import React from 'react';
import { useParams } from 'react-router-dom';

import ProjectHeader from './components/ProjectHeader/ProjectHeader';
import ProjectImage from './components/ProjectImage/ProjectImage';
import { HeaderTemplate } from 'components';
import { projectData } from 'static/project-data';

import { Wrapper } from './project.styles';

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = projectData.find((project) => project.id === +id);

  return (
    <HeaderTemplate theme={'dark'}>
      {project && (
        <Wrapper>
          <ProjectHeader project={project} />
          <ProjectImage image={project.image} />
        </Wrapper>
      )}
    </HeaderTemplate>
  );
};

export default Project;
