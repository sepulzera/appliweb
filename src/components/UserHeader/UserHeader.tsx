import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import UserRecord from '../../context/UserContext/UserRecord';

import H from '../Ui/H';
import P from '../Ui/P';

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
  const { t } = useTranslation();

  return (
    <>
      <H variant='h1'>{`${props.user.forname} ${props.user.lastname}`}</H>
      <P variant='subtitle1'>{props.user.jobtitle}</P>
    </>
  );
};

export default withTranslation()(UserHeader);
