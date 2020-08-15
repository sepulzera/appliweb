import * as React from 'react';

import { CssBaseline } from '@material-ui/core';

import { AnyComponent } from '../types/Types';

import ErrorBoundary from '../hoc/ErrorBoundary/ErrorBoundary';
import SettingsContext from '../context/SettingsContext/SettingsContext';

import BaseTheme from './BaseTheme';

/**
 * {@link App} Props.
 */
interface IAppProps {
  /** The actual app container. */
  children: AnyComponent;
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
  const settingsContext = React.useContext(SettingsContext);

  return (
    <BaseTheme theme={settingsContext != null ? settingsContext.getTheme() : undefined}>
      <CssBaseline />
      <ErrorBoundary verbose printStack>
        {props.children}
      </ErrorBoundary>
    </BaseTheme>
  );
};

export default App;
