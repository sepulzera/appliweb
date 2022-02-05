import { cx } from '@emotion/css';
import { makeStyles } from 'tss-react/mui';

import { AnyComponent } from '../../types/Types';
import H from '../Ui/H';

/** {@link CapsHeading} Props. */
export interface ICapsHeadingProps {
  /** Classes used for styling. */
  className?: string | undefined;
  /** Heading text. */
  children:   AnyComponent;
}

const useStyles = makeStyles()(({
  capsHeading: {
    fontVariant:   'small-caps',
    fontWeight:    'normal',
    letterSpacing: '2px',
    '&::first-letter': {
      fontSize:    '1.6rem',
    },
  },
}));

/**
 * Renders a heading (h1 .. h6).
 *
 * @param props - {@link ICapsHeadingProps}.
 */
const CapsHeading: React.FC<ICapsHeadingProps> = (props: ICapsHeadingProps) => {
  const { classes } = useStyles();

  return (
    <H
        className = {cx(classes.capsHeading, props.className)}
        variant   = 'h3'>
      {props.children}
    </H>
  );
};

export default CapsHeading;
