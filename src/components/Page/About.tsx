
import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import PageWithHeaderAndFooter from '../../hoc/Page/PageWithHeaderAndFooter';

const About: React.FC<WithTranslation> = () => {
  const { t } = useTranslation();

  return (
    <PageWithHeaderAndFooter header={t('about:about')}>
      {/* TODO Add content */}
    </PageWithHeaderAndFooter>
  );
};

export default withTranslation()(About);
