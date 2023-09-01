import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';

import { AnyComponent } from '../../types/Types';

import TimelineRecordHeading from './TimelineRecordHeading';
import Grid from '../Ui/Grid';
import GridItem from '../Ui/GridItem';
import TimelineRecordSubtitle from './TimelineRecordSubtitle';

/** {@link TimelineRecord}  */
export interface ITimelineRecordProps {
  /** Heading text. */
  heading:    string;
  /** Place information. */
  place:      string;
  /** Begin date for the record. */
  begin:      Date;
  /** End date for the record. */
  end:        Date | undefined;

  /** Link to dialog. */
  to: string;

  /** Heading text. */
  children:   AnyComponent;
}

const useStyles = makeStyles()(({
  timelineRecord: {
    marginTop: '0.8rem',
    marginLeft: '0.8rem',

    '& p': {
      marginBottom: '0 !important',
    },
  },
  timelineRecordSubtitles: {
    marginBottom: '0.3rem',
  },
  timelineRecordPlace: {
    paddingRight: '1rem',
  },
  timelineRecordTimestamp: {
    maxWidth: 'max-content',
  },
}));

const toTimestamp = (begin: Date, end: Date | undefined, locale: string, currentString: string): string => {
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    year:  'numeric',
    month: '2-digit',
  });

  const beginString = dateFormatter.format(begin);
  const endString   = end != null ? dateFormatter.format(end) : currentString;
  return `${beginString} - ${endString}`;
};

/**
 * {@link TimelineRecord} for a {@link Timeline}.
 *
 * @param props - {@link ITimelineRecordProps}.
 */
const TimelineRecord: React.FC<ITimelineRecordProps> = ({
    heading, place, begin, end, to, children, ...rest }: ITimelineRecordProps) => {
  const { t, i18n } = useTranslation();
  const { classes } = useStyles();

  const timestamp = toTimestamp(begin, end, i18n.language, t('common:current time'));

  return (
    <div className={classes.timelineRecord} {...rest}>
      <TimelineRecordHeading to={to}>{heading}</TimelineRecordHeading>
      <Grid spacing={1} className={classes.timelineRecordSubtitles}>
        <GridItem xs sm md className={classes.timelineRecordPlace}><TimelineRecordSubtitle>{place}</TimelineRecordSubtitle></GridItem>
        <GridItem xs={12} sm={5} md={4} className={classes.timelineRecordTimestamp}><TimelineRecordSubtitle>{timestamp}</TimelineRecordSubtitle></GridItem>
      </Grid>
      {children}
    </div>
  );
};

export default TimelineRecord;
