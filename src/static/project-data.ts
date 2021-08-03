import { ProjectImage, ProjectModel } from 'types';

import indeed from 'assets/images/indeed_main_mockup.png';

export const projectData: ProjectModel[] = [
  {
    id: 1,
    name: 'Indeed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    period: 'September 2019',
    image: indeed,
    image2: indeed,
    image3: indeed,
    status: 'Ukończone',
    technology: 'React, Typescript',
    platform: 'Progressive Web App',
    category: 'e-commerce'
  },
  {
    id: 2,
    name: 'Test 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    period: 'February 2021',
    image: indeed,
    image2: indeed,
    image3: indeed,
    status: 'Ukończone',
    technology: 'React, Typescript',
    platform: 'Progressive Web App',
    category: 'e-commerce'
  },
  {
    id: 3,
    name: 'Test 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    period: 'March 2021',
    image: indeed,
    image2: indeed,
    image3: indeed,
    status: 'Ukończone',
    technology: 'React, Typescript',
    platform: 'Progressive Web App',
    category: 'e-commerce'
  },
  {
    id: 4,
    name: 'Test 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    period: 'April 2021',
    image: indeed,
    image2: indeed,
    image3: indeed,
    status: 'Ukończone',
    technology: 'React, Typescript',
    platform: 'Progressive Web App',
    category: 'e-commerce'
  }
];

export const projectImages: ProjectImage[] = [
  {
    projectId: 1,
    images: {
      image1: indeed,
      image2: '',
      image3: ''
    }
  }
];
