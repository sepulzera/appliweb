import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '../Ui/AppBar';
import H from '../Ui/H';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <H variant='h1' className={classes.title}>{props.title}</H>
      </AppBar>
    </div>
  );
};

export default Header;
