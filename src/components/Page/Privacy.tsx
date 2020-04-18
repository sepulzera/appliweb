import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import PageWithHeaderAndFooter from '../../hoc/Page/PageWithHeaderAndFooter';

import PrivacyDe from '../Privacy/PrivacyDe';
import PrivacyEn from '../Privacy/PrivacyEn';

const Privacy: React.FC<WithTranslation> = () => {
  const { t, i18n } = useTranslation();

  return (
    <PageWithHeaderAndFooter header={t('privacy:privacy')}>
      { i18n.isInitialized && i18n.language != null && i18n.language.startsWith('de') && (
        <PrivacyDe />
      )}
      { i18n.isInitialized && i18n.language != null && i18n.language.startsWith('en') && (
        <PrivacyEn />
      )}
    </PageWithHeaderAndFooter>
  );
};

export default withTranslation()(Privacy);
