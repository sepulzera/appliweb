import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import H from '../components/Ui/H';
import P from '../components/Ui/P';
import PageWithHeaderAndFooter from '../hoc/Page/PageWithHeaderAndFooter';

/**
 * Component rendering legal information about this website.
 */
const LegalPage: React.FC<WithTranslation> = () => {
  const { t } = useTranslation();

  return (
    <PageWithHeaderAndFooter header={t('legal:legal')}>
      <H variant='h4' component='h2'>Verantwortlich für dieses Angebot gemäß § 5 TMG / § 55 RStV:</H>
      <P component='address'>
        Frank Hartung
        <br />
        Friedlich-List-Straße 36
        <br />
        99096 Erfurt
      </P>
    </PageWithHeaderAndFooter>
  );
};

export default withTranslation()(LegalPage);
