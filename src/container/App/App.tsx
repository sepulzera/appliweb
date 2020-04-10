import * as React from 'react';

import Loader from '../../components/Loader/Loader';
import SimpleErrorBoundary from '../../hoc/SimpleErrorBoundary/SimpleErrorBoundary';

interface IAppProps {
  children: React.ReactNode;
}

const App: React.FC<IAppProps> = props => (
  <React.Suspense fallback={Loader}>
    <SimpleErrorBoundary verbose printStack>
      {props.children}
    </SimpleErrorBoundary>
  </React.Suspense>
);

export default App;
