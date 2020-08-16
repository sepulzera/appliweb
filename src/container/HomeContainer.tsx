import React from 'react';

import JobRequestContext from '../context/JobRequestContext/JobRequestContext';
import LeisureContext from '../context/LeisureContext/LeisureContext';
import UserContext from '../context/UserContext/UserContext';

import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';

/**
 * Homepage rendering the actual content - me!
 *
 * See also: {@link HomePage}
 */
const HomeContainer: React.FC<{}> = () => {
  const userContext = React.useContext(UserContext);
  const jobRequestContext = React.useContext(JobRequestContext);
  const leisureContext = React.useContext(LeisureContext);

  if (userContext == null || jobRequestContext == null || leisureContext == null) throw new Error('Context unitialized');

  // HACK: There is only one user - me!
  const userId = 1;
  const user   = userContext.getUser(userId);

  if (user == null) {
    return <ErrorPage title='error:user not found title' message='error:user not found message' />;
  }

  const jobRequest = jobRequestContext.getJobRequestForUser(user.id);
  const leisures   = leisureContext.getLeisuresForUser(user.id);

  return (
    <HomePage
        jobRequest={jobRequest}
        leisures={leisures}
        user={user} />
  );
};

export default HomeContainer;
