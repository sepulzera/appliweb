import { useContext } from 'react';

import ErrorBoundary from '../hoc/ErrorBoundary/ErrorBoundary';
import SettingsContext from '../context/SettingsContext/SettingsContext';

import BaseTheme from './BaseTheme';
import Routes from './Routes';

/**
 * Wrapper that is setting up the content of this app.
 *
 * Actually should be merged with {@link Root}, but wasn't due to
 * technical limitations.
 *
 * @param props - {@link IAppProps}.
 */
const App: React.FC = () => {
  const settingsContext = useContext(SettingsContext);

  return (
    <BaseTheme theme={settingsContext != null ? settingsContext.getTheme() : undefined}>
      <ErrorBoundary verbose printStack>
        <Routes />
      </ErrorBoundary>
    </BaseTheme>
  );
};

export default App;
