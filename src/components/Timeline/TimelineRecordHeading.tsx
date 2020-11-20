import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { AnyComponent } from '../../types/Types';
import H from '../Ui/H';

/** {@link TimelineRecordHeading} Props. */
export interface ITimelineRecordHeadingProps {
  /** Heading text. */
  children:   AnyComponent;
}

const useStyles = makeStyles(theme => ({
  timelineRecordHeading: {
    display: 'inline-block',
    paddingLeft: '0.55rem',

    color: theme.palette.primary.main,
    letterSpacing: '2px',
  },
}));

/**
 * Heading for a {@link TimelineRecord}.
 *
 * @param props - {@link ITimelineRecordHeadingProps}.
 */
const TimelineRecordHeading: React.FC<ITimelineRecordHeadingProps> = (props: ITimelineRecordHeadingProps) => {
  const classes = useStyles();

  return (
    <H variant='h4' className={classes.timelineRecordHeading}>
      {props.children}
    </H>
  );
};

export default TimelineRecordHeading;
