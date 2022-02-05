import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

import routes, { IRouteType } from '../constants/Routes';

/**
 * Routes available in this app.
 *
 * See also: src/constants/Routes
 */
const Routes: React.FC = () => {
  const routesList = [];

  let index: number, nextRoute: IRouteType;
  for (index = 0; index < routes.length; ++index) {
    nextRoute = routes[index];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const PageComponent = nextRoute.component as any;

    routesList.push(
      <Route path={`${process.env.PUBLIC_URL}${nextRoute.path}`} key={nextRoute.path} element={<PageComponent />} />
    );
  }

  return (
    <RouterRoutes>
      {routesList}
      <Route path='*' element={<Navigate replace to={`${process.env.PUBLIC_URL}/home`} />} />
    </RouterRoutes>
  );
};

export default Routes;
