
import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import H from '../Ui/H';
import P from '../Ui/P';
import PageWithHeaderAndFooter from '../../hoc/Page/PageWithHeaderAndFooter';


const Legal: React.FC<WithTranslation> = () => {
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

export default withTranslation()(Legal);
