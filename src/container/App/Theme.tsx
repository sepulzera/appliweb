import * as React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { useMediaQuery } from '@material-ui/core';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

/**
 * {@link BaseTheme} Props
 */
interface IBaseThemeProps {
  /** Components that should use this theme, e. g. the whole application. */
  children: React.ReactNode;
}

/**
 * MaterialUi Theming definition for AppliWeb.
 *
 * @param props - {@link IBaseThemeProps}.
 */
const BaseTheme: React.FC<IBaseThemeProps> = (props: IBaseThemeProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const baseTypography: TypographyOptions = {
    fontSize: 16,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
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
  };

  const memoTheme = React.useMemo(
    () => createMuiTheme({
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        primary: orange,
      },
      typography: baseTypography,
      props: {
        MuiButtonBase: {
          disableRipple: true,
        },
      },
    }),
    [prefersDarkMode, baseTypography]
  );

  memoTheme.overrides = {
    MuiBottomNavigation: {
      root: {
        width:     '100%',
        borderTop: '1px solid darkgray',
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: 'none',
      },
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: memoTheme.palette.primary.main,
        color: memoTheme.palette.primary.contrastText,
        padding : '0 1rem',
      },
    },
    MuiDialogActions: {
      root: {
        backgroundColor: memoTheme.palette.primary.main,
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor : 'rgba(107, 163, 198, 0.3)',
        backdropFilter  : 'blur(4px)',
      },
    },
  };

  return (
    <ThemeProvider theme={memoTheme}>
      {props.children}
    </ThemeProvider>
  );
};

export default BaseTheme;
