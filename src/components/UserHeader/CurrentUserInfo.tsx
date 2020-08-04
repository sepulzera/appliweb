import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import UserRecord from '../../context/UserContext/UserRecord';

import H from '../Ui/H';
import P from '../Ui/P';

const useStyles = makeStyles((theme: Theme) => createStyles({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  leftSide: {
    flex: 1,
  },
  rightSide: {
    flex: 1,
    marginBottom: 'auto',
    marginTop: 'auto',
  },

  heading: {
    color: theme.palette.secondary.main,
  },
  jobtitle: {
    color: theme.palette.secondary.main,
    fontSize: '2em',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  name: {
    fontSize: '2.5em',
    letterSpacing: '2px',
  },
  lastname: {
    fontWeight: 'bold',
  },
}));

/**
 * {@link CurrentUserInfo} Props.
 */
interface ICurrentUserInfoProps extends WithTranslation {
  /** User to display. */
  user: UserRecord;
}

/**
 * UserInfo displayed in the {@link UserHeader}.
 *
 * @param props - {@link ICurrentUserInfoProps}.
 */
const CurrentUserInfo: React.FC<ICurrentUserInfoProps> = (props: ICurrentUserInfoProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <div className={classes.rightSide}>
        <H variant='h1' className={classes.name}>{`${props.user.forname} `}<span className={classes.lastname}>{props.user.lastname}</span></H>
        <P variant='subtitle1' className={classes.jobtitle}>{t(`job:${props.user.jobtitle}`)}</P>
      </div>
      <div className={classes.leftSide}>
        <H variant='h3' className={classes.heading}>{`${t('job:employed at')}:`}</H>
        {/* TODO Get dynamically from latest ExpStation with category 'job' */}
        <P variant='body1'>IBYKUS AG für Informationstechnologie</P>

        <H variant='h3' className={classes.heading}>{`${t('job:degree')}:`}</H>
        {/* TODO Get dynamically from latest ExpStation with category 'edu' */}
        <P variant='body1'>Master of Science,<br />Fachhochschule Erfurt</P>
      </div>
    </>
  );
};

export default withTranslation()(CurrentUserInfo);
