/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import EducationRecord from '../../context/EducationContext/EducationRecord';
import UserRecord      from '../../context/UserContext/UserRecord';

import H from '../Ui/H';
import P from '../Ui/P';

/**
 * {@link CurrentUserInfo} Props.
 */
interface ICurrentUserInfoProps extends WithTranslation {
  /** User to display. */
  user: UserRecord;
  /** Degree to display. */
  degree: EducationRecord | undefined;
}

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
  rightPadding: {
    paddingRight: '3rem',
  },

  userInfo: {
    flex: 1,
    paddingLeft: `${theme.spacing(3)}px`,

    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row-reverse',
  },
  heading: {
    color: theme.palette.secondary.main,
  },
  userInfoText: {
    color: theme.palette.primary.contrastText,
  },
  jobtitle: {
    color: theme.palette.secondary.main,
    fontSize: '2em',
    fontWeight: 'bold',
    fontStyle: 'italic',
    lineHeight: '1.3em',
  },
  name: {
    color: theme.palette.primary.contrastText,
    fontSize: '2.5em',
    letterSpacing: '2px',
  },
  lastname: {
    color: theme.palette.primary.contrastText,
    fontWeight: 'bold',
  },
}));

/**
 * UserInfo displayed in the {@link UserHeader}.
 *
 * @param props - {@link ICurrentUserInfoProps}.
 */
const CurrentUserInfo: React.FC<ICurrentUserInfoProps> = (props: ICurrentUserInfoProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const { degree, user } = props;

  return (
    <div className={classes.userInfo}>
      <div className={classes.rightSide}>
        <H variant='h1' className={classes.name}>{`${user.forname} `}<span className={classes.lastname}>{user.lastname}</span></H>
        <P variant='subtitle1' className={classes.jobtitle}>{t(`job:${user.jobtitle}`)}</P>
      </div>
      <div className={classes.leftSide}>
        <div className={classes.rightPadding}>
          <H variant='h3' className={classes.heading}>{`${t('job:employed at')}:`}</H>
          {/* TODO Get dynamically from latest ExpStation with category 'job' */}
          <P variant='body1' className={classes.userInfoText}>IBYKUS AG für Informationstechnologie</P>

          {degree != null && (
            <>
              <H variant='h3' className={classes.heading}>{`${t('job:degree')}:`}</H>
              <P variant='body1' className={classes.userInfoText}>{t(`education:${degree.degree}`)},<br />{t(`education:${degree.place}`)}</P>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(CurrentUserInfo);
