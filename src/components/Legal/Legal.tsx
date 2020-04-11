
import React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

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
        <Typography variant='h2'>Verantwortlich für dieses Angebot gemäß § 5 TMG / § 55 RStV:</Typography>
        <Typography variant='body1'>Frank Hartung</Typography>
        <Typography variant='body1'>Friedlich-List-Straße 36</Typography>
        <Typography variant='body1'>99096 Erfurt</Typography>
      </Paper>

      <Footer />
    </div>
  );
};

export default withTranslation()(Legal);
