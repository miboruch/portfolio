import Landing from 'pages/Landing/Landing';
import { RouteModel } from 'types';

export const routes: RouteModel[] = [
  {
    name: 'Strona główna',
    path: '/',
    exact: true,
    component: Landing
  }
];
