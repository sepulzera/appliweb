import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiPaper from '@material-ui/core/Paper';

import { AnyComponent } from '../../types/Types';

/**
 * {@link Paper} Props.
 */
interface IPaperProps {
  /** Content of the paper. */
  children: AnyComponent;
}

const useStyles = makeStyles({
  paper: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    padding: '1rem',
    marginBottom: '2rem',
    '& *:first-child': {
      marginTop: 0,
    },
  },
});

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
