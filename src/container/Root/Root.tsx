
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ContextProvider from '../../hoc/ContextProvider/ContextProvider';
import Loader from '../../components/Loader/Loader';
import Routes from './Routes';

const Root: React.FC<{}> = () => (
  <React.Suspense fallback={<Loader />}>
    <Router>
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </Router>
  </React.Suspense>
);

export default Root;
