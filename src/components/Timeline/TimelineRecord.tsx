import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { AnyComponent } from '../../types/Types';

/** {@link TimelineRecord} Props. */
export interface ITimelineRecordProps {
  /** Heading text. */
  children:   Array<AnyComponent>;
}

const useStyles = makeStyles(theme => ({
  timelineRecord: {
    marginTop: '1rem',
    marginLeft: '0.8rem',
    '&::before': {
      content: '"·"',
      verticalAlign: 'middle',
      lineHeight: '1rem',
      marginLeft: '-2.4rem',
      fontSize: '7rem',
      color: theme.palette.primary.main,
    },
  },
}));

/**
 * {@link TimelineRecord} for a {@link Timeline}.
 *
 * @param props - {@link ITimelineRecordProps}.
 */
const TimelineRecord: React.FC<ITimelineRecordProps> = (props: ITimelineRecordProps) => {
  const classes = useStyles();

  return (
    <div className={classes.timelineRecord}>
      {props.children}
    </div>
  );
};

export default TimelineRecord;
