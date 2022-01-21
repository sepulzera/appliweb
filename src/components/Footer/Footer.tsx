import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import Routes, { IRouteType } from '../../constants/Routes';

const useStyles = makeStyles({
  bottomNavigation: {
    height: 'auto',
  },
});

/**
 * Default navigation footer for this app.
 */
const Footer: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const activeRoute = useLocation();

  const routesList = [];
  let index: number, nextRoute: IRouteType, activeRouteIndex = 0;
  for (index = 0; index < Routes.length; ++index) {
    nextRoute = Routes[index];
    if (`${process.env.PUBLIC_URL}${nextRoute.path}` === activeRoute.pathname) {
      activeRouteIndex = index;
    }

    routesList.push(
      <BottomNavigationAction component={Link} to={`${process.env.PUBLIC_URL}${nextRoute.path}`} label={t(nextRoute.title)} icon={<nextRoute.icon />} key={nextRoute.title} />
    );
  }

  return (
    <BottomNavigation
        value={activeRouteIndex}
        showLabels
        className={classes.bottomNavigation}>
      {routesList}
    </BottomNavigation>
  );
};

export default Footer;
