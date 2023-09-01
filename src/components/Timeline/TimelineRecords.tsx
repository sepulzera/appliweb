import { makeStyles } from 'tss-react/mui';

import { AnyComponent } from '../../types/Types';

/** {@link TimelineRecords} Props. */
export interface ITimelineRecordsProps {
  /** Heading text. */
  children:   Array<AnyComponent>;
}

const useStyles = makeStyles()((theme => ({
  timelineRecords: {
    paddingLeft: '0.7em',
    borderLeft:  `0.1rem solid ${theme.palette.text.secondary}`,
    borderTop:   `0.1rem solid ${theme.palette.text.secondary}`,
  },
})));

/**
 * List of {@link TimelineRecord} for a {@link Timeline}.
 *
 * @param props - {@link ITimelineRecordsProps}.
 */
const TimelineRecords: React.FC<ITimelineRecordsProps> = ({ children, ...rest }: ITimelineRecordsProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.timelineRecords} {...rest}>
      {children}
    </div>
  );
};

export default TimelineRecords;
