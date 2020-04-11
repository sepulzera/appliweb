import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
      <AppBar position='static'>
        <Typography variant='h1' className={classes.title}>{props.title}</Typography>
      </AppBar>
    </div>
  );
};

export default Header;
