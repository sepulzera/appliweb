import React from 'react';

import UserContext from '../../context/UserContext/UserContext';
import JobRequestContext from '../../context/JobRequestContext/JobRequestContext';

import UserHeader from '../UserHeader/UserHeader';
import PageWithHeaderAndFooter from '../../hoc/Page/PageWithHeaderAndFooter';

/**
 * Home component rendering the actual content - me!
 *
 * See also: {@link HomePage}
 */
const Home: React.FC<{}> = () => {
  const userContext = React.useContext(UserContext);
  const jobRequestContext = React.useContext(JobRequestContext);

  // HACK: There is only one user - me!
  const user = userContext != null ? userContext.getUser(1) : undefined;
  const jobRequest = jobRequestContext != null ? jobRequestContext.getJobRequestForUser(1) : undefined;

  return (
    <PageWithHeaderAndFooter
        headerComponent = {user != null && jobRequest != null ? <UserHeader user={user} jobRequest={jobRequest} /> : null}>
      TODO
    </PageWithHeaderAndFooter>
  );
};

export default Home;
