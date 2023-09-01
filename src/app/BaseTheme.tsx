import { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

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

function getTheme(settingsTheme: number | undefined, defaultTheme: boolean): number {
  if (settingsTheme == null) {
    return defaultTheme ? 1 : 0;
  } else {
    return settingsTheme;
  }
}

function themeToString(theme: number): 'dark' | 'light' {
  switch (theme) {
    case 0:  return 'light';
    default: return 'dark';
  }
}

/**
 * MaterialUi Theming definition for AppliWeb.
 *
 * @param props - {@link IBaseThemeProps}.
 */
const BaseTheme: React.FC<IBaseThemeProps> = ({ theme, children }: IBaseThemeProps) => {
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
      fontSize:     '2.4rem',
    },
    h2: {
      fontSize:     '1.8rem',
      marginTop:    '2em',
      marginBottom: '1em',
    },
    h3: {
      fontSize:     '1.3rem',
      fontWeight:   'bold',
      marginTop:    '1.5em',
      marginBottom: '0.7em',
    },
    h4: {
      fontSize:     '1rem',
      fontWeight:   'bold',
      marginTop:    '0.5em',
      marginBottom: '0.5em',
    },
    body1: {
      fontSize:     '1rem',
    },
  };

  const memoTheme = useMemo(
    () => createTheme({
      palette: {
        mode: themeToString(getTheme(theme, prefersDarkMode)),
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
    [theme, prefersDarkMode, baseTypography]
  );

  memoTheme.components = {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor : 'rgba(144, 124, 107, 0.3)',
          backdropFilter  : 'blur(1px)',
          WebkitBackdropFilter: 'blur(1px)',
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          width:     '100%',
          borderTop: '1px solid darkgray',
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          padding: `${memoTheme.spacing(0.5)} ${memoTheme.spacing(1.5)} ${memoTheme.spacing(0.5)}`,
        },
        label: {
          lineHeight: 1,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'inherit',
          textTransform: 'unset',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: memoTheme.spacing(0.5),
          '& .MuiTouchRipple-child': {
            borderRadius: memoTheme.spacing(0.5),
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          overflowY: 'hidden',
        },
        paper: {
          [memoTheme.breakpoints.down('sm')]: {
            margin: `${memoTheme.spacing(4)} 0`,
            overflowX: 'hidden',
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: memoTheme.palette.primary.main,
          color: memoTheme.palette.primary.contrastText,
          alignItems: 'center',
          padding : '0 1rem',
          '& .MuiTypography-h6.MuiTypography-root:first-letter': {
            textTransform: 'uppercase',
          },
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: 0,
          minWidth: '20rem',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          backgroundColor: memoTheme.palette.primary.main,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingBottom: memoTheme.spacing(1),
          paddingTop: memoTheme.spacing(1),
          marginBottom: 0,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: memoTheme.spacing(1),
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '& caption': {
            width: '100%',
          },
        },
      },
    },
  };

  return (
    <ThemeProvider theme={memoTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default BaseTheme;
