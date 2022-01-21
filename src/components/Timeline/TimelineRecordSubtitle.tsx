import { makeStyles } from '@material-ui/core/styles';

import { AnyComponent } from '../../types/Types';
import P from '../Ui/P';

/** {@link TimelineRecordSubtitle} Props. */
export interface ITimelineRecordSubtitleProps {
  /** Heading text. */
  children:   AnyComponent;
}

const useStyles = makeStyles(theme => ({
  timelineRecordSubtitle: {
    marginBottom: 0,
    fontStyle: 'italic',
    color: theme.palette.text.secondary,
  },
}));

/**
 * Heading for a {@link TimelineRecord}.
 *
 * @param props - {@link ITimelineRecordSubtitleProps}.
 */
const TimelineRecordSubtitle: React.FC<ITimelineRecordSubtitleProps> = (props: ITimelineRecordSubtitleProps) => {
  const classes = useStyles();

  return (
    <P variant='body1' className={classes.timelineRecordSubtitle}>
      {props.children}
    </P>
  );
};

export default TimelineRecordSubtitle;
