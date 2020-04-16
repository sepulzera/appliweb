import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import H from '../Ui/H';

const NotFound: React.FC<WithTranslation> = () => {
  const { t } = useTranslation();

  return (
    <H variant='h1'>{t('error:page not found')}</H>
  );
};

export default withTranslation()(NotFound);
