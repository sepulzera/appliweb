import React from 'react';

import UserHeader from '../components/UserHeader/UserHeader';
import PageWithHeaderAndFooter from '../hoc/Page/PageWithHeaderAndFooter';
import JobRequestRecord from '../context/JobRequestContext/JobRequestRecord';
import UserRecord from '../context/UserContext/UserRecord';

/**
 * {@link HomePage} Props.
 */
interface IHomePageProps {
  user: UserRecord;
  jobRequest: JobRequestRecord;
}

/**
 * Home component rendering the actual content - me!
 *
 * See also: {@link HomePage}
 */
const Home: React.FC<IHomePageProps> = (props: IHomePageProps) => (
  <PageWithHeaderAndFooter
      headerComponent = {<UserHeader user={props.user} jobRequest={props.jobRequest} />}>
    TODO
  </PageWithHeaderAndFooter>
);

export default Home;
