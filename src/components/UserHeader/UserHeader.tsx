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
    display: 'flex',
    flexDirection: 'row',

    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`  ,
  },
  user: {
    flex: 1,

    display: 'flex',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
  },
  large: {
    width: '15rem', // TODO proper values
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
      <div className={classes.user}>
        <CurrentUserInfo user={props.user} />
        <JobRequest jobRequest={props.jobRequest} />
      </div>

      <Avatar alt={`${props.user.forname} ${props.user.lastname}`} src={userAvatar} className={classes.large} />

      <Settings />
    </div>
  );
};

export default UserHeader;
