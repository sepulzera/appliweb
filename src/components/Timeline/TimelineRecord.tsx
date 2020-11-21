import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import { AnyComponent } from '../../types/Types';

import TimelineRecordHeading from './TimelineRecordHeading';
import Grid from '../Ui/Grid';
import GridItem from '../Ui/GridItem';
import TimelineRecordSubtitle from './TimelineRecordSubtitle';

/** {@link TimelineRecord} Props. */
export interface ITimelineRecordProps extends WithTranslation {
  heading:    string;
  place:      string;
  begin:      Date;
  end:        Date | undefined;

  /** Heading text. */
  children:   AnyComponent;
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
    '& p': {
      marginBottom: 0,
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
const TimelineRecord: React.FC<ITimelineRecordProps> = (props: ITimelineRecordProps) => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  const timestamp = toTimestamp(props.begin, props.end, i18n.language, t('common:current time'));

  return (
    <div className={classes.timelineRecord}>
      <TimelineRecordHeading>{props.heading}</TimelineRecordHeading>
      <Grid spacing={1} className={classes.timelineRecordSubtitles}>
        <GridItem xs sm md className={classes.timelineRecordPlace}><TimelineRecordSubtitle>{props.place}</TimelineRecordSubtitle></GridItem>
        <GridItem xs={12} sm={5} md={4} className={classes.timelineRecordTimestamp}><TimelineRecordSubtitle>{timestamp}</TimelineRecordSubtitle></GridItem>
      </Grid>
      {props.children}
    </div>
  );
};

export default withTranslation()(TimelineRecord);
