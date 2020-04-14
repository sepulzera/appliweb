
import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const About: React.FC<WithTranslation> = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Header title={t('about:about')} />

      <Footer />
    </div>
  );
};

export default withTranslation()(About);