import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes, { IRouteType } from '../constants/Routes';

import App from './App';

/**
 * Routes available in this app.
 *
 * See also: src/constants/Routes
 */
const Routes: React.FC<{}> = () => {
  const routesList = [];

  let index: number, nextRoute: IRouteType;
  for (index = 0; index < routes.length; ++index) {
    nextRoute = routes[index];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const PageComponent = nextRoute.component as any;

    routesList.push(
      <Route exact path={`${process.env.PUBLIC_URL}${nextRoute.path}`} key={nextRoute.path}>
        <PageComponent />
      </Route>
    );
  }

  return (
    <App>
      <Switch>
        {routesList}
        <Redirect to={`${process.env.PUBLIC_URL}/home`} />
      </Switch>
    </App>
  );
};

export default Routes;
