import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { AnyComponent } from '../../types/Types';
import H from '../Ui/H';

const useStyles = makeStyles({
  capsHeading: {
    textTransform: 'capitalize',
    fontVariant: 'small-caps',
  },
});

/** {@link CapsHeading} Props. */
export interface ICapsHeadingProps {
  /** Heading text. */
  children:   AnyComponent;
}

/**
 * Renders a heading (h1 .. h6).
 *
 * @param props - {@link ICapsHeadingProps}.
 */
const CapsHeading: React.FC<ICapsHeadingProps> = (props: ICapsHeadingProps) => {
  const classes = useStyles();

  return (
    <H
        className = {classes.capsHeading}
        variant   = 'h3'>
      {props.children}
    </H>
  );
};

export default CapsHeading;
