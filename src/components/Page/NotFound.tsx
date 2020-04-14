import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';

const NotFound: React.FC<WithTranslation> = () => {
  const { t } = useTranslation();

  return (
    <Typography variant='h1'>{t('error:page not found')}</Typography>
  );
};

export default withTranslation()(NotFound);
