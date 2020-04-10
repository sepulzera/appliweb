
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import { Typography, Paper } from '@material-ui/core';

export default function Home() {
  return (
    <Paper>
      <Typography variant='h2'>Impressum</Typography>
      <Link to={routes.HOME}>Startseite</Link>
    </Paper>
  );
}
