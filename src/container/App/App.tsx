import * as React from 'react';

import ErrorBoundary from '../../hoc/ErrorBoundary/ErrorBoundary';
import { CssBaseline } from '@material-ui/core';
import BaseTheme from './Theme';

/**
 * {@link App} Props.
 */
interface IAppProps {
  /** The actual app container. */
  children: React.ReactNode;
}

/**
 * Wrapper that is setting up the content of this app.
 *
 * Actually should be merged with {@link Root}, but wasn't due to
 * technical limitations.
 *
 * @param props - {@link IAppProps}.
 */
const App: React.FC<IAppProps> = (props: IAppProps) => {
  return (
    <BaseTheme>
      <CssBaseline />
      <ErrorBoundary verbose printStack>
        {props.children}
      </ErrorBoundary>
    </BaseTheme>
  );
};

export default App;
