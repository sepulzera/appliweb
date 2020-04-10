
import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import { Typography, Paper, CssBaseline } from '@material-ui/core';
import UserContext from '../../context/UserContext/UserContext';

export default function Home() {
  const userContext = React.useContext(UserContext);

  return (
    <Paper>
      <Typography variant='h2'>{`${userContext.forname} ${userContext.lastname}`}</Typography>
      <CssBaseline />

      <CssBaseline />
      <Link to={routes.ABOUT}>Impressum</Link>
    </Paper>
  );
}
