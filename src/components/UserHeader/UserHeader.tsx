import * as React from 'react';
import { Avatar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import AssetsHelper from '../../assets/AssetsHelper';
import UserRecord from '../../context/UserContext/UserRecord';
import JobRequestRecord from '../../context/JobRequestContext/JobRequestRecord';

import Settings from '../Settings/Settings';
import CurrentUserInfo from './CurrentUserInfo';
import JobRequest from './JobRequest';

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
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    [theme.breakpoints.down('md')]: {
      width: 'auto',
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up('lg')]: {
      width: `calc(1280px - ${theme.spacing(4)}px)`,
      maxWidth: `calc(100vw - ${theme.spacing(8)}px)`,
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
    zIndex: 99999,
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
 * {@link UserHeader} Props.
 */
interface IUserHeaderProps {
  /** User to display. */
  user: UserRecord;
  /** Jobrequest to display. */
  jobRequest: JobRequestRecord;
}

/**
 * Fancy UserHeader for the {@link HomePage}.
 *
 * @param props - {@link IUserHeaderProps}.
 */
const UserHeader: React.FC<IUserHeaderProps> = (props: IUserHeaderProps) => {
  const classes = useStyles();

  const userAvatar = AssetsHelper.getAsset(props.user.avatar);

  return (
    <div className={classes.header}>
      <div className={classes.sectionTabletAndDesktop}>
        <div className={classes.user}>
          <CurrentUserInfo user={props.user} />
          <JobRequest jobRequest={props.jobRequest} asRow />
        </div>

        <div className={classes.column}>
          <Settings className={classes.settings} />
          <Avatar variant='square' alt={`${props.user.forname} ${props.user.lastname}`} src={userAvatar} className={classes.large} />
        </div>
      </div>

      <div className={classes.sectionMobile}>
        <div className={classes.row}>
          <CurrentUserInfo user={props.user} />
          <Settings className={classes.settings} />
        </div>
        <div className={classes.row}>
          <JobRequest jobRequest={props.jobRequest} asRow={false} />
          <Avatar variant='square' alt={`${props.user.forname} ${props.user.lastname}`} src={userAvatar} className={classes.mobileAvatar} />
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
