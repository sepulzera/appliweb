import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '../Ui/AppBar';
import H from '../Ui/H';
import { Toolbar, Container } from '@material-ui/core';

const useStyles = makeStyles({
  toolbar: {
    marginLeft:  'auto',
    marginRight: 'auto',
  },
  title: {
    width:    '1280px', // magic number: max width of the page container
    maxWidth: '100vw',
    paddingLeft: '2rem',
  },
});

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = props => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar disableGutters className={classes.toolbar}>
        <Container>
          <H variant='h1' className={classes.title}>{props.title}</H>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
