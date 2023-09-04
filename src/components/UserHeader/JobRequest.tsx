import { useTranslation } from 'react-i18next';

import { makeStyles } from 'tss-react/mui';

import JobRequestRecord from '../../context/JobRequestContext/JobRequestRecord';

import ResponsiveList from '../Ui/ResponsiveList';
import ListItem from '../Ui/ListItem';

/**
 * {@link JobRequest} Props.
 */
interface IJobRequestProps {
  /** Jobrequest to display. */
  jobRequest: JobRequestRecord;
  asRow:      boolean;
}

const useStyles = makeStyles()((theme => ({
  jobRequestList: {
    color: theme.palette.secondary.contrastText,

    [theme.breakpoints.down('sm')]: {
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
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.secondary.main,
      marginTop: 0,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
  },
})));

function jobRequestToString(requestState: number): string {
  switch (requestState) {
    case 1:  return 'state open';
    case 2:  return 'state looking';
    default: return 'state not interested';
  }
}

/**
 * Jobrequest displayed in the {@link UserHeader}.
 *
 * @param props - {@link IJobRequestProps}.
 */
const JobRequest: React.FC<IJobRequestProps> = ({ jobRequest, asRow }: IJobRequestProps) => {
  const { t } = useTranslation();
  const { classes } = useStyles();

  const { requestState, city, salary } = jobRequest;
  if (requestState == null && city == null && salary == null) return null;

  return (
    <ResponsiveList
        title = {t('job:job request')}
        asRow = {asRow}
        stretchList
        className={classes.jobRequestList}
        titleClassName={classes.jobRequestTitle}>
      {requestState != null && (
        <ListItem>{t(`job:${jobRequestToString(jobRequest.requestState)}`)}</ListItem>
      )}
      {city != null && (
        <ListItem>{t(`city:${jobRequest.city}`)}</ListItem>
      )}
      {salary != null && (
        <ListItem>{`${t('common:salary')}: ${salary}`}</ListItem>
      )}
    </ResponsiveList>
  );
};

export default JobRequest;
