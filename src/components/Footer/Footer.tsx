import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import Routes, { IRouteType } from '../../constants/Routes';

const Footer: React.FC<WithTranslation> = () => {
  const { t } = useTranslation();
  const activeRoute = useLocation();

  const routesList = [];
  let index: number, nextRoute: IRouteType, activeRouteIndex = 0;
  for (index = 0; index < Routes.length; ++index) {
    nextRoute = Routes[index];
    if (nextRoute.path === activeRoute.pathname) {
      activeRouteIndex = index;
    }

    routesList.push(
      <BottomNavigationAction component={Link} to={nextRoute.path} label={t(nextRoute.title)} icon={<nextRoute.icon />} key={nextRoute.title} />
    );
  }

  return (
    <BottomNavigation
        value={activeRouteIndex}
        showLabels>
      {routesList}
    </BottomNavigation>
  );
};

export default withTranslation()(Footer);
