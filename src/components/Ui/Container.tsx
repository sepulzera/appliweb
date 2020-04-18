import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiContainer from '@material-ui/core/Container';

const useStyles = makeStyles({
  container: {
    flex: '1 1 1px',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
});

const Paper: React.FC<{}> = props => {
  const classes = useStyles();
  return (
    <MuiContainer className={classes.container}>
      {props.children}
    </MuiContainer>
  );
};

export default Paper;
