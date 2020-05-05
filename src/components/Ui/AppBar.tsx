import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import { Toolbar, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  toolbar: {
    marginLeft:  'auto',
    marginRight: 'auto',
  },
  container: {
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
    [theme.breakpoints.up('md')]: {
      width: `calc(1280px - ${theme.spacing(4)}px)`,
      maxWidth: `calc(100vw - ${theme.spacing(8)}px)`,
    },
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

/**
 * {@link AppBar} Props.
 */
interface IAppBarProps {
  /** Content of the AppBar, probably some kind of heading. */
  children: React.ReactNode;
}

/**
 * Displays information relating to the current site.
 *
 * @param props - {@link IAppBarProps}.
 */
const AppBar: React.FC<IAppBarProps> = (props: IAppBarProps) => {
  const classes = useStyles();

  return (
    <MuiAppBar
        position='static'>
      <Toolbar disableGutters className={classes.toolbar}>
        <Container className={classes.container}>
          {props.children}
        </Container>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
