import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import { Toolbar, Container } from '@material-ui/core';

const useStyles = makeStyles({
  toolbar: {
    marginLeft:  'auto',
    marginRight: 'auto',
  },
});

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
        <Container>
          {props.children}
        </Container>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
