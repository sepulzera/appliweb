import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import UserRecord from '../../context/UserContext/UserRecord';

interface IUserHeaderProps extends WithTranslation {
  user: UserRecord;
}

const UserHeader: React.FC<IUserHeaderProps> = props => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant='h1'>{`${props.user.forname} ${props.user.lastname}`}</Typography>
      <Typography variant='subtitle1'>{props.user.jobtitle}</Typography>
    </>
  );
};

export default withTranslation()(UserHeader);