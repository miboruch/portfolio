import React from 'react';
import { Switch, Route } from 'react-router';

import { Layout } from 'components';
import { routes } from 'routes/routes';

import './App.css';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Layout>
  );
};

export default App;
