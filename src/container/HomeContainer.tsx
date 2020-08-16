import React from 'react';

import JobRequestContext from '../context/JobRequestContext/JobRequestContext';
import LeisureContext from '../context/LeisureContext/LeisureContext';
import UserContext from '../context/UserContext/UserContext';

import HomePage from '../pages/HomePage';

/**
 * Homepage rendering the actual content - me!
 *
 * See also: {@link HomePage}
 */
const HomeContainer: React.FC<{}> = () => {
  const userContext = React.useContext(UserContext);
  const jobRequestContext = React.useContext(JobRequestContext);
  const leisureContext = React.useContext(LeisureContext);

  // HACK: There is only one user - me!
  const userId = 1;
  const user       = userContext != null ? userContext.getUser(userId) : undefined;
  const jobRequest = jobRequestContext != null ? jobRequestContext.getJobRequestForUser(userId) : undefined;
  const leisures   = leisureContext != null ? leisureContext.getLeisuresForUser(userId) : undefined;

  if (user == null || jobRequest == null || leisures == null) return null;

  return (
    <HomePage
        jobRequest={jobRequest}
        leisures={leisures}
        user={user} />
  );
};

export default HomeContainer;
