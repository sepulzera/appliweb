import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import PageWithHeaderAndFooter from '../hoc/Page/PageWithHeaderAndFooter';

import PrivacyDe from '../components/Privacy/PrivacyDe';
import PrivacyEn from '../components/Privacy/PrivacyEn';

/**
 * Component rendering privacy information.
 *
 * See also: {@link PrivacyContainer}
 */
const PrivacyPage: React.FC<WithTranslation> = () => {
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

export default withTranslation()(PrivacyPage);
