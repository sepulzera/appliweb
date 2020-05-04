import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { Avatar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import AssetsHelper from '../../assets/AssetsHelper';
import UserRecord from '../../context/UserContext/UserRecord';

import H from '../Ui/H';
import P from '../Ui/P';

const useStyles = makeStyles((theme: Theme) => createStyles({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

/**
 * {@link UserHeader} Props.
 */
interface IUserHeaderProps extends WithTranslation {
  /** User to display. */
  user: UserRecord;
}

/**
 * Fancy UserHeader for the {@link HomePage}.
 *
 * @param props - {@link IUserHeaderProps}.
 */
const UserHeader: React.FC<IUserHeaderProps> = (props: IUserHeaderProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const userAvatar = AssetsHelper.getAsset(props.user.avatar);

  return (
    <>
      <H variant='h1'>{`${props.user.forname} ${props.user.lastname}`}</H>
      <P variant='subtitle1'>{t(`job:${props.user.jobtitle}`)}</P>
      <Avatar alt={`${props.user.forname} ${props.user.lastname}`} src={userAvatar} className={classes.large} />
    </>
  );
};

export default withTranslation()(UserHeader);
