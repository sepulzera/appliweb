import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './container/App/App';
import HomePage from './container/HomePage/HomePage';
import AboutPage from './container/AboutPage/AboutPage';
import LegalPage from './container/LegalPage/LegalPage';
import PrivacyPage from './container/PrivacyPage/PrivacyPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path={routes.ABOUT}   component={AboutPage}   />
        <Route exact path={routes.HOME}    component={HomePage}    />
        <Route exact path={routes.LEGAL}   component={LegalPage}   />
        <Route exact path={routes.PRIVACY} component={PrivacyPage} />
      </Switch>
    </App>
  );
}
