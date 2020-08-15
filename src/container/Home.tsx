import React from 'react';

import UserContext from '../context/UserContext/UserContext';
import JobRequestContext from '../context/JobRequestContext/JobRequestContext';

import Home from '../pages/HomePage';

/**
 * Homepage rendering the actual content - me!
 *
 * See also: {@link Home}
 */
const HomePage: React.FC<{}> = () => {
  const userContext = React.useContext(UserContext);
  const jobRequestContext = React.useContext(JobRequestContext);

  // HACK: There is only one user - me!
  const user = userContext != null ? userContext.getUser(1) : undefined;
  const jobRequest = jobRequestContext != null ? jobRequestContext.getJobRequestForUser(1) : undefined;

  if (user == null || jobRequest == null) return null;

  return (
    <Home user={user} jobRequest={jobRequest} />
  );
};

export default HomePage;
