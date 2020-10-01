import * as React from 'react';
import clsx from 'clsx';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import JobRequestRecord from '../../context/JobRequestContext/JobRequestRecord';

import H from '../Ui/H';

/**
 * {@link JobRequest} Props.
 */
interface IJobRequestProps extends WithTranslation {
  /** Jobrequest to display. */
  jobRequest: JobRequestRecord;
  asRow:      boolean;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  jobRequest: {
    display: 'flex',
    margin: 0,
    padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,

    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,

    [theme.breakpoints.down('md')]: {
      borderRadius: `0 ${theme.spacing(1)}px 0 0`,
    },
    [theme.breakpoints.up('lg')]: {
      borderRadius: `${theme.spacing(1)}px ${theme.spacing(1)}px 0 0`,
    },
  },
  jobRequestAsColumn: {
    flexDirection: 'column',
    width: 'min-content',
  },
  jobRequestAsRow: {
    minWidth: '100%',
  },

  jobRequestTitle: {
    display: 'inline',
    fontSize: '1rem',
  },
  jobRequestTitleAsColumn: {
    margin: `${theme.spacing(2)}px 0`,
  },
  jobRequestTitleAsRow: {
    margin: 0,
  },

  jobRequestList: {
    flex: 1,

    display: 'flex',
    justifyContent: 'space-between',

    '& li': {
      marginRight: `${theme.spacing(2)}px`,
      marginLeft: `${theme.spacing(2)}px`,
    },
  },
  jobRequestListAsColumn: {
    flexDirection: 'column',

    padding: 0,

    '& li': {
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  },
  jobRequestListAsRow: {
    flexWrap: 'wrap',

    margin: 0,

    '& li': {
      display: 'inline',
    },
  },
}));

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
    <div className={clsx(classes.jobRequest, {
      [classes.jobRequestAsColumn]: !props.asRow,
      [classes.jobRequestAsRow]: props.asRow,
    })}>
      <H
          variant='h3'
          className={clsx(classes.jobRequestTitle, {
              [classes.jobRequestTitleAsColumn]: !props.asRow,
              [classes.jobRequestTitleAsRow]: props.asRow,
          })}>
        {`${t('job:job request')}:`}
      </H>
      <ul className={clsx(classes.jobRequestList, {
        [classes.jobRequestListAsColumn]: !props.asRow,
        [classes.jobRequestListAsRow]: props.asRow,
      })}>
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
