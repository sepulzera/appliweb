import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiPaper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  paper: {
    padding: '2rem',
    marginBottom: '2rem',
  },
});

const Paper: React.FC<{}> = props => {
  const classes = useStyles();
  return (
    <MuiPaper className={classes.paper}>
      {props.children}
    </MuiPaper>
  );
};

export default Paper;
