import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';

const Header: React.FC<WithTranslation> = () => {
  const { t } = useTranslation();

  return (
    <Typography variant='h1'>{`Frank Hartung - ${t('header:title')}`}</Typography>
  );
};

export default withTranslation()(Header);
