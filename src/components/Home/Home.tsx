
import React from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

import routes from '../../constants/routes.json';
import UserContext from '../../context/UserContext/UserContext';

import Header from '../Header/Header';

export default function Home() {
  const userContext = React.useContext(UserContext);

  const user = userContext != null ? userContext.getUser(1) : undefined;

  return (
    <Paper>
      { user != null && (
        <>
          <Header user={user} />

          <Link to={routes.ABOUT}>Impressum</Link>
        </>
      )}
    </Paper>
  );
}
