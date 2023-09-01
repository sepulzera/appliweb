import { useTranslation } from 'react-i18next';

import PageWithHeaderAndFooter from '../hoc/Page/PageWithHeaderAndFooter';

import PrivacyDe from '../components/Privacy/PrivacyDe';
import PrivacyEn from '../components/Privacy/PrivacyEn';
import PageWrapper from '../hoc/Page/PageWrapper';

/**
 * Component rendering privacy information.
 */
const PrivacyPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <PageWrapper title={t('privacy:privacy link')}>
      <PageWithHeaderAndFooter header={t('privacy:privacy')}>
        { i18n.isInitialized && i18n.language?.startsWith('de') && (
          <PrivacyDe />
        )}
        { i18n.isInitialized && i18n.language?.startsWith('en') && (
          <PrivacyEn />
        )}
      </PageWithHeaderAndFooter>
    </PageWrapper>
  );
};

export default PrivacyPage;
