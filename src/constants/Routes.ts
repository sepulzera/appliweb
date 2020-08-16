/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccountBalance, Face, Home, Info } from '@material-ui/icons';

import { AnyComponent } from '../types/Types';

import HomeContainer from '../container/HomeContainer';
import AboutContainer from '../container/AboutContainer';
import LegalContainer from '../container/LegalContainer';
import PrivacyContainer from '../container/PrivacyContainer';

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
  component: AnyComponent;
}

/**
 * Available routes in this app.
 */
const Routes: Array<IRouteType> = [
  {
    path:      '/home',
    title:     'home:home link',
    icon:      Home,
    component: HomeContainer,
  },
  {
    path:      '/about',
    title:     'about:about link',
    icon:      Info,
    component: AboutContainer,
  },
  {
    path:      '/legal',
    title:     'legal:legal link',
    icon:      AccountBalance,
    component: LegalContainer,
  },
  {
    path:      '/privacy',
    title:     'privacy:privacy link',
    icon:      Face,
    component: PrivacyContainer,
  },
];

export default Routes;
