
import React from 'react';

import UserContext from '../../context/UserContext/UserContext';

import UserHeader from '../UserHeader/UserHeader';
import Footer from '../Footer/Footer';

/**
 * Home component rendering the actual content - me!
 *
 * See also: {@link HomePage}
 */
const Home: React.FC<{}> = () => {
  const userContext = React.useContext(UserContext);

  // HACK: There is only one user - me!
  const user = userContext != null ? userContext.getUser(1) : undefined;

  return (
    <>
      { user != null && (
        <UserHeader user={user} />
      )}

      <Footer />
    </>
  );
};

export default Home;
