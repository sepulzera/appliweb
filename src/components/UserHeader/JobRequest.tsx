import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

import JobRequestRecord from '../../context/JobRequestContext/JobRequestRecord';

import ResponsiveList from '../Ui/ResponsiveList';
import ListItem from '../Ui/ListItem';

/**
 * {@link JobRequest} Props.
 */
interface IJobRequestProps extends WithTranslation {
  /** Jobrequest to display. */
  jobRequest: JobRequestRecord;
  asRow:      boolean;
}

const useStyles = makeStyles(theme => ({
  jobRequestList: {
    color: theme.palette.secondary.contrastText,

    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      marginTop:    'auto',
      marginBottom: 'auto',
      '& ul': {
        marginLeft: '0.5rem',
      },
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: theme.palette.secondary.main,
      fontSize: '1rem',
    },
  },
  jobRequestTitle: {
    [theme.breakpoints.down('xs')]: {
      color: theme.palette.secondary.main,
      marginTop: 0,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
  },
}));

/**
 * Jobrequest displayed in the {@link UserHeader}.
 *
 * @param props - {@link IJobRequestProps}.
 */
const JobRequest: React.FC<IJobRequestProps> = (props: IJobRequestProps) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const salaryToString = (salary: number): string => `> ${salary.toString()}`;

  const jobRequestToString = (requestState: number): string => {
    switch (requestState) {
      case 1:  return 'state open';
      case 2:  return 'state looking';
      default: return 'state not interested';
    }
  };

  const { requestState, city, salary } = props.jobRequest;
  if (requestState == null && city == null && salary == null) return null;

  return (
    <ResponsiveList
        title = {t('job:job request')}
        asRow = {props.asRow}
        stretchList
        className={classes.jobRequestList}
        titleClassName={classes.jobRequestTitle}>
      {requestState != null && (
        <ListItem>{t(`job:${jobRequestToString(props.jobRequest.requestState)}`)}</ListItem>
      )}
      {city != null && (
        <ListItem>{t(`city:${props.jobRequest.city}`)}</ListItem>
      )}
      {salary != null && (
        <ListItem>{`${salaryToString(salary)} €`}</ListItem>
      )}
    </ResponsiveList>
  );
};

export default withTranslation()(JobRequest);
