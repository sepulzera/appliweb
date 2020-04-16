
import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '../Ui/Paper';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import H from '../Ui/H';
import P from '../Ui/P';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Legal: React.FC<WithTranslation> = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <Header title={t('legal:legal')} />

      <Paper>
        <H variant='h4' component='h2'>Verantwortlich für dieses Angebot gemäß § 5 TMG / § 55 RStV:</H>
        <P>Frank Hartung</P>
        <P>Friedlich-List-Straße 36</P>
        <P>99096 Erfurt</P>
      </Paper>

      <Footer />
    </div>
  );
};

export default withTranslation()(Legal);
