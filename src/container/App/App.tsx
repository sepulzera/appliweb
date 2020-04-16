import * as React from 'react';

import SimpleErrorBoundary from '../../hoc/SimpleErrorBoundary/SimpleErrorBoundary';

interface IAppProps {
  children: React.ReactNode;
}

const App: React.FC<IAppProps> = props => (
  <SimpleErrorBoundary verbose printStack>
    {props.children}
  </SimpleErrorBoundary>
);

export default App;
