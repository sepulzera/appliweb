import * as React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import ErrorBoundary from '../../hoc/ErrorBoundary/ErrorBoundary';
import { orange } from '@material-ui/core/colors';
import { CssBaseline } from '@material-ui/core';

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
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () => createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: orange,
        },
        typography: {
          h1: {
            fontSize: '3rem',
          },
          h2: {
            fontSize: '2.4rem',
            marginTop: '2em',
            marginBottom: '1em',
          },
          h3: {
            fontSize: '1.3rem',
            marginTop: '2em',
            marginBottom: '1em',
          },
          h4: {
            fontSize: '1.6rem',
            marginTop: '0.5em',
            marginBottom: '0.5em',
          },
          body1: {
            marginBottom: '1.5rem',
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary verbose printStack>
        {props.children}
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
