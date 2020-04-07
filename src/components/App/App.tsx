import * as React from 'react';
import Header from '../Header/Header';
import SimpleErrorBoundary from '../../hoc/SimpleErrorBoundary';

const App: React.FC = () => (
  <SimpleErrorBoundary verbose printStack>
    <Header />
  </SimpleErrorBoundary>
);

export default App;
