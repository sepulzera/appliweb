import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import UserRecord from '../../context/UserContext/UserRecord';

import H from '../Ui/H';
import P from '../Ui/P';

interface IUserHeaderProps extends WithTranslation {
  user: UserRecord;
}

const UserHeader: React.FC<IUserHeaderProps> = props => {
  const { t } = useTranslation();

  return (
    <>
      <H variant='h1'>{`${props.user.forname} ${props.user.lastname}`}</H>
      <P variant='subtitle1'>{props.user.jobtitle}</P>
    </>
  );
};

export default withTranslation()(UserHeader);
