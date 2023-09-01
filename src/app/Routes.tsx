import { useMemo } from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

import routes from '../constants/Routes';

/**
 * Routes available in this app.
 *
 * See also: src/constants/Routes
 */
const Routes: React.FC = () => {
  const routesList = useMemo(() => routes.map(route => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const PageComponent = route.component as any;
    return <Route path={`${process.env.PUBLIC_URL}${route.path}`} key={route.path} element={<PageComponent />} />;
  }), [routes]);

  return (
    <RouterRoutes>
      {routesList}
      <Route path='*' element={<Navigate replace to={`${process.env.PUBLIC_URL}/home`} />} />
    </RouterRoutes>
  );
};

export default Routes;
