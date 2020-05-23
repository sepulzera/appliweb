import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes, { IRouteType } from '../../constants/Routes';
import PageTitleFixer from '../../hoc/Page/PageTitleFixer';

import App from '../App/App';

/**
 * Routes available in this app.
 *
 * See also: src/constants/Routes
 */
const Routes: React.FC<WithTranslation> = () => {
  const { t } = useTranslation();

  const routesList = [];

  let index: number, nextRoute: IRouteType;
  for (index = 0; index < routes.length; ++index) {
    nextRoute = routes[index];
    routesList.push(
      <Route exact path={`${process.env.PUBLIC_URL}${nextRoute.path}`} key={nextRoute.path}>
        <PageTitleFixer title={t(nextRoute.title)} component={nextRoute.component} />
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

export default withTranslation()(Routes);
