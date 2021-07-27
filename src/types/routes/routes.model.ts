import React from 'react';
import { RouteComponentProps } from 'react-router';

export interface RouteModel {
  name: string;
  path: string;
  exact: boolean;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}
