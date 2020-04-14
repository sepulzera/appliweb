
import React from 'react';

import UserContext from '../../context/UserContext/UserContext';

import UserHeader from '../UserHeader/UserHeader';
import Footer from '../Footer/Footer';

export default function Home() {
  const userContext = React.useContext(UserContext);

  const user = userContext != null ? userContext.getUser(1) : undefined;

  return (
    <>
      { user != null && (
        <UserHeader user={user} />
      )}

      <Footer />
    </>
  );
}
