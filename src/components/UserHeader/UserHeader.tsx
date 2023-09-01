import { makeStyles } from 'tss-react/mui';

import EducationRecord  from '../../context/EducationContext/EducationRecord';
import JobRequestRecord from '../../context/JobRequestContext/JobRequestRecord';
import UserRecord       from '../../context/UserContext/UserRecord';

import Settings from '../Settings/Settings';
import CurrentUserInfo from './CurrentUserInfo';
import JobRequest from './JobRequest';
import Image from '../Ui/Image';
import CareerRecord from '../../context/CareerContext/CareerRecord';
/**
 * {@link UserHeader}
 */
interface IUserHeaderProps {
  /** User to display. */
  user: UserRecord;
  /** Jobrequest to display. */
  jobRequest: JobRequestRecord | undefined;

  /** Job to display. */
  latestCareer: CareerRecord | undefined;
  /** Degree to display. */
  highestEducation: EducationRecord | undefined;
}

const useStyles = makeStyles()((theme => ({
  header: {
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    '& .MuiAppBar-root': {
      background: 'transparent',
    },
  },

  sectionTabletAndDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.down('lg')]: {
      width: 'auto',
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up('lg')]: {
      width: 'calc(80rem - 2rem)',
      maxWidth: 'calc(100vw - 2rem)',
    },
  },

  user: {
    flex: 1,

    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
  },
  large: {
    width: '15rem',
    height: '1px',
    flex: '1 1 1px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  settings: {
    position: 'relative',
    top: theme.spacing(2),
    right: '0',
    zIndex: 1,
    height: 'min-content',
  },

  sectionMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  mobileAvatar: {
    flex: 1,
    height: 'auto',
  },
})));

/**
 * Fancy UserHeader for the {@link HomePage}.
 *
 * @param props - {@link IUserHeaderProps}.
 */
const UserHeader: React.FC<IUserHeaderProps> = ({
    user, jobRequest, latestCareer, highestEducation }: IUserHeaderProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.sectionTabletAndDesktop}>
        <div className={classes.user}>
          <CurrentUserInfo user={user} degree={highestEducation} job={latestCareer} />
          { jobRequest && <JobRequest jobRequest={jobRequest} asRow /> }
        </div>

        <div className={classes.column}>
          <Settings className={classes.settings} />
          <Image alt={[user.forname, user.lastname].filter(Boolean).join(' ')} src={user.avatar} className={classes.large} />
        </div>
      </div>

      <div className={classes.sectionMobile}>
        <div className={classes.row}>
          <CurrentUserInfo user={user} degree={highestEducation} job={latestCareer} />
          <Settings className={classes.settings} />
        </div>
        <div className={classes.row}>
          { jobRequest && <JobRequest jobRequest={jobRequest} asRow={false} /> }
          <Image alt={[user.forname, user.lastname].filter(Boolean).join(' ')} src={user.avatar} className={classes.mobileAvatar} />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
