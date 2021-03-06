import * as React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

import { AnyComponent } from '../types/Types';

/**
 * {@link BaseTheme} Props
 */
interface IBaseThemeProps {
  /** Theme. 0=light, 1=dark. */
  theme: number | undefined;
  /** Components that should use this theme, e. g. the whole application. */
  children: AnyComponent;
}

/**
 * MaterialUi Theming definition for AppliWeb.
 *
 * @param props - {@link IBaseThemeProps}.
 */
const BaseTheme: React.FC<IBaseThemeProps> = (props: IBaseThemeProps) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const getTheme = (settingsTheme: number | undefined, defaultTheme: boolean): number => {
    if (settingsTheme == null) {
      return defaultTheme ? 1 : 0;
    } else {
      return settingsTheme;
    }
  };

  const themeToString = (theme: number): 'dark' | 'light' => {
    switch (theme) {
      case 0:  return 'light';
      default: return 'dark';
    }
  };

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
      fontWeight: 'bold',
      marginTop: '1.5em',
      marginBottom: '0.7em',
    },
    h4: {
      fontSize: '1.6rem',
      marginTop: '0.5em',
      marginBottom: '0.5em',
    },
    body1: {
      marginBottom: '1.5rem',
      fontSize: '1rem',
    },
  };

  const memoTheme = React.useMemo(
    () => createMuiTheme({
      palette: {
        type: themeToString(getTheme(props.theme, prefersDarkMode)),
        primary: {
          main: '#e47200',
          light: '#f3be88',
          contrastText: '#fff',
        },
        secondary: {
          main: '#333333',
          contrastText: '#fff',
        },
      },
      typography: baseTypography,
    }),
    [props.theme, prefersDarkMode, baseTypography]
  );

  memoTheme.overrides = {
    MuiBackdrop: {
      root: {
        backgroundColor : 'rgba(144, 124, 107, 0.3)',
        backdropFilter  : 'blur(1px)',
        '-webkit-backdrop-filter': 'blur(1px)',
      },
    },
    MuiBottomNavigation: {
      root: {
        width:     '100%',
        borderTop: '1px solid darkgray',
      },
    },
    MuiBottomNavigationAction: {
      root: {
        padding: `${memoTheme.spacing(0.5)}px ${memoTheme.spacing(1.5)}px ${memoTheme.spacing(0.5)}px`,
      },
      label: {
        lineHeight: 1,
      },
    },
    MuiButton: {
      root: {
        color: 'inherit',
        textTransform: 'unset',
      },
    },
    MuiDialog: {
      root: {
        overflowY: 'hidden',
      },
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: memoTheme.palette.primary.main,
        color: memoTheme.palette.primary.contrastText,
        padding : '0 1rem',
        textTransform: 'capitalize',
      },
    },
    MuiDialogContent: {
      root: {
        padding: 0,
        minWidth: '20rem',
      },
    },
    MuiDialogActions: {
      root: {
        backgroundColor: memoTheme.palette.primary.main,
      },
    },
    MuiMenuItem: {
      root: {
        paddingBottom: memoTheme.spacing(1),
        paddingTop: memoTheme.spacing(1),
        marginBottom: 0,
      },
    },
    MuiLinearProgress: {
      root: {
        height: memoTheme.spacing(1),
      },
    },
    MuiTable: {
      root: {
        '& caption': {
          width: '100%',
        },
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
