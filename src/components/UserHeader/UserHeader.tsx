import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import UserRecord from '../../context/UserContext/UserRecord';
import JobRequestRecord from '../../context/JobRequestContext/JobRequestRecord';

import Settings from '../Settings/Settings';
import CurrentUserInfo from './CurrentUserInfo';
import JobRequest from './JobRequest';
import Image from '../Ui/Image';
/**
 * {@link UserHeader} Props.
 */
interface IUserHeaderProps {
  /** User to display. */
  user: UserRecord;
  /** Jobrequest to display. */
  jobRequest: JobRequestRecord | undefined;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
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
    [theme.breakpoints.down('md')]: {
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
    top: `${theme.spacing(2)}px`,
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

}));

/**
 * Fancy UserHeader for the {@link HomePage}.
 *
 * @param props - {@link IUserHeaderProps}.
 */
const UserHeader: React.FC<IUserHeaderProps> = (props: IUserHeaderProps) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.sectionTabletAndDesktop}>
        <div className={classes.user}>
          <CurrentUserInfo user={props.user} />
          { props.jobRequest && <JobRequest jobRequest={props.jobRequest} asRow /> }
        </div>

        <div className={classes.column}>
          <Settings className={classes.settings} />
          <Image alt={`${props.user.forname} ${props.user.lastname}`} src={props.user.avatar} className={classes.large} />
        </div>
      </div>

      <div className={classes.sectionMobile}>
        <div className={classes.row}>
          <CurrentUserInfo user={props.user} />
          <Settings className={classes.settings} />
        </div>
        <div className={classes.row}>
          { props.jobRequest && <JobRequest jobRequest={props.jobRequest} asRow={false} /> }
          <Image alt={`${props.user.forname} ${props.user.lastname}`} src={props.user.avatar} className={classes.mobileAvatar} />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
