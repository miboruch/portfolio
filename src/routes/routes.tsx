import Landing from 'pages/Landing/Landing';
import Project from 'pages/Project/Project';
import Projects from 'pages/Projects/Projects';
import { RouteModel } from 'types';

export const routes: RouteModel[] = [
  {
    name: 'Strona główna',
    path: '/',
    exact: true,
    component: Landing
  },
  {
    name: 'Projekty',
    path: '/projects',
    exact: true,
    component: Projects
  },
  {
    name: 'Projekt',
    path: '/project/:id',
    exact: true,
    component: Project
  }
];
