import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiPaper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  paper: {
    padding: '2rem',
    marginBottom: '2rem',
    '& *:first-child': {
      marginTop: 0,
    },
  },
});

/**
 * {@link Paper} Props.
 */
interface IPaperProps {
  /** Content of the paper. */
  children: React.ReactNode;
}

/**
 * Renders a digital paper to place content on.
 *
 * You probably want to use this to display your pages content.
 *
 * @param props - {@link IPaperProps}.
 */
const Paper: React.FC<IPaperProps> = (props: IPaperProps) => {
  const classes = useStyles();
  return (
    <MuiPaper className={classes.paper}>
      {props.children}
    </MuiPaper>
  );
};

export default Paper;
