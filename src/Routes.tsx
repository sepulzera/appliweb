import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './container/App/App';
import HomePage from './container/HomePage/HomePage';
import AboutPage from './container/AboutPage/AboutPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.ABOUT} component={AboutPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
