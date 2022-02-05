import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ContextProvider from './ContextProvider';
import Loader from '../components/Loader/Loader';
import App from './App';

/**
 * Root of this app. Is mounted into the html/react root element.
 */
const Root: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <Router>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Router>
  </Suspense>
);

export default Root;
