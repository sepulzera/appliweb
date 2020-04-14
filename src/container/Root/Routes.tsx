import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { Switch, Route } from 'react-router-dom';

import routes, { IRouteType } from '../../constants/Routes';

import App from '../App/App';
import Page from '../../components/Page/Page';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const Routes: React.FC<WithTranslation> = () => {
  const { t } = useTranslation();

  const routesList = [];

  let index: number, nextRoute: IRouteType;
  for (index = 0; index < routes.length; ++index) {
    nextRoute = routes[index];
    routesList.push(
      <Route exact path={nextRoute.path} key={nextRoute.path}>
        <Page title={t(nextRoute.title)} component={nextRoute.component} />
      </Route>
    );
  }

  return (
    <App>
      <Switch>
        {routesList}
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </App>
  );
};

export default withTranslation()(Routes);
