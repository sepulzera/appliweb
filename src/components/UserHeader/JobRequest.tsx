import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import JobRequestRecord from '../../context/JobRequestContext/JobRequestRecord';

import H from '../Ui/H';

const useStyles = makeStyles((theme: Theme) => createStyles({
  jobRequest: {
    display: 'inline-block',
    width: '100%',
    minWidth: '100%',
    height: 'min-content',
    margin: 0,
    backgroundColor: theme.palette.secondary.main,
  },
  jobRequestTitle: {
    display: 'inline',
    margin: 0,
  },
  jobRequestList: {
    display: 'inline',
    margin: 0,

    '& li': {
      display: 'inline',
    },
  },
  rightSide: {
    display: 'inline-block',
    float: 'right',
  },
}));

/**
 * {@link JobRequest} Props.
 */
interface IJobRequestProps extends WithTranslation {
  /** Jobrequest to display. */
  jobRequest: JobRequestRecord;
}

/**
 * Jobrequest displayed in the {@link UserHeader}.
 *
 * @param props - {@link IJobRequestProps}.
 */
const JobRequest: React.FC<IJobRequestProps> = (props: IJobRequestProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const salaryToString = (salary: number): string => `> ${salary.toString()}`;

  const jobRequestToString = (requestState: number): string => {
    switch (requestState) {
      case 1:  return 'state open';
      case 2:  return 'state looking';
      default: return 'state not interested';
    }
  };

  return (
    <div className={classes.jobRequest}>
      <H variant='h3' className={classes.jobRequestTitle}>{`${t('job:job request')}:`}</H>
      <ul className={classes.jobRequestList}>
        {props.jobRequest.requestState != null && (
          <li>{t(`job:${jobRequestToString(props.jobRequest.requestState)}`)}</li>
        )}
        {props.jobRequest.city && (
          <li>{t(`city:${props.jobRequest.city}`)}</li>
        )}
        {props.jobRequest.salary && (
          <li>{`${salaryToString(props.jobRequest.salary)} €`}</li>
        )}
      </ul>
    </div>
  );
};

export default withTranslation()(JobRequest);
