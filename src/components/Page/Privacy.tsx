import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PrivacyDe from '../Privacy/PrivacyDe';
import PrivacyEn from '../Privacy/PrivacyEn';
import Paper from '../Ui/Paper';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Privacy: React.FC<WithTranslation> = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.root}>
      <Header title={t('privacy:privacy')} />

      <Paper>
        { i18n.isInitialized && i18n.language != null && i18n.language.startsWith('de') && (
          <PrivacyDe />
        )}
        { i18n.isInitialized && i18n.language != null && i18n.language.startsWith('en') && (
          <PrivacyEn />
        )}
      </Paper>

      <Footer />
    </div>
  );
};

export default withTranslation()(Privacy);
