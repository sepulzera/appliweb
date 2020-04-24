/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccountBalance, Face, Home, Info } from '@material-ui/icons';

import HomePage from '../container/HomePage/HomePage';
import AboutPage from '../container/AboutPage/AboutPage';
import LegalPage from '../container/LegalPage/LegalPage';
import PrivacyPage from '../container/PrivacyPage/PrivacyPage';

/**
 * {@link Routes) Type.
 */
export type IRouteType = {
  /** URL path. Should start with a slash. */
  path:      string;
  /** URL title. Should be a 18next locale. */
  title:     string;
  /** Displayed icon for the navigation menu. */
  icon:      any;
  /** Container for this route. */
  component: React.ReactNode;
}

/**
 * Available routes in this app.
 */
const Routes: Array<IRouteType> = [
  {
    path:      '/',
    title:     'home:home link',
    icon:      Home,
    component: HomePage,
  },
  {
    path:      '/about',
    title:     'about:about link',
    icon:      Info,
    component: AboutPage,
  },
  {
    path:      '/legal',
    title:     'legal:legal link',
    icon:      AccountBalance,
    component: LegalPage,
  },
  {
    path:      '/privacy',
    title:     'privacy:privacy link',
    icon:      Face,
    component: PrivacyPage,
  },
];

export default Routes;
