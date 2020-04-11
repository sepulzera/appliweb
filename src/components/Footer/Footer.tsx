import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';

import routes from '../../constants/routes.json';

const Footer: React.FC<WithTranslation> = () => {
  const { t } = useTranslation();

  const activeRoute = useLocation();

  // OPT move information to routes.json to make it easier configurable

  const routeToIndex = (route: string) => {
    switch (route) {
      case '/about':   return 1;
      case '/legal':   return 2;
      case '/privacy': return 3;

      default:         return 0; // home
    }
  };

  return (
    <BottomNavigation
        value={routeToIndex(activeRoute.pathname)}
        showLabels>
      <BottomNavigationAction component={Link} to={routes.HOME}    label={t('home:home')}             icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to={routes.ABOUT}   label={t('about:about')}           icon={<InfoIcon />} />
      <BottomNavigationAction component={Link} to={routes.LEGAL}   label={t('legal:legal')}           icon={<AccountBalanceIcon />} />
      <BottomNavigationAction component={Link} to={routes.PRIVACY} label={t('privacy:privacy-short')} icon={<FaceIcon />} />
    </BottomNavigation>
  );
};

export default withTranslation()(Footer);
