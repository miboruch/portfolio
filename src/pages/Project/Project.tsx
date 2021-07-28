import React from 'react';
import { useParams } from 'react-router-dom';

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <p>Project {id}</p>
    </div>
  );
};

export default Project;
