import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { AnyComponent } from '../../types/Types';
import CapsHeading from '../Heading/CapsHeading';

/** {@link TimelineHeading} Props. */
export interface ITimelineHeadingProps {
  /** Heading text. */
  children:   AnyComponent;
}

const useStyles = makeStyles(theme => ({
  timelineHeading: {
    paddingTop: '0.5rem',
    paddingLeft: '1.5rem',
    borderTop: `0.1rem solid ${theme.palette.text.secondary}`,

    marginBottom: '0.5rem',
  },
}));

/**
 * Heading for a {@link Timeline}.
 *
 * @param props - {@link ITimelineHeadingProps}.
 */
const TimelineHeading: React.FC<ITimelineHeadingProps> = (props: ITimelineHeadingProps) => {
  const classes = useStyles();

  return (
    <CapsHeading className={classes.timelineHeading}>
      {props.children}
    </CapsHeading>
  );
};

export default TimelineHeading;
