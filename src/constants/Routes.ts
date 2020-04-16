import { AccountBalance, Face, Home, Info } from '@material-ui/icons';

import HomePage from '../container/HomePage/HomePage';
import AboutPage from '../container/AboutPage/AboutPage';
import LegalPage from '../container/LegalPage/LegalPage';
import PrivacyPage from '../container/PrivacyPage/PrivacyPage';

export interface IRouteType {
  path:      string;
  title:     string;
  icon:      any;
  component: any;
}

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
