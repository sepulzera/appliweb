
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ContextProvider from '../../hoc/ContextProvider/ContextProvider';
import Routes from '../../Routes';

const Root: React.FC<{}> = () => (
  <Router>
    <ContextProvider>
      <Routes />
    </ContextProvider>
  </Router>
);

export default Root;
