import React from 'react';

import UserHeader from '../components/UserHeader/UserHeader';
import PageWithHeaderAndFooter from '../hoc/Page/PageWithHeaderAndFooter';
import JobRequestRecord from '../context/JobRequestContext/JobRequestRecord';
import UserRecord from '../context/UserContext/UserRecord';
import LeisureRecord from '../context/LeisureContext/LeisureRecord';
import Leisures from '../components/Leisures/Leisures';

/**
 * {@link HomePage} Props.
 */
interface IHomePageProps {
  jobRequest: JobRequestRecord | undefined;
  leisures:   Array<LeisureRecord>;
  user:       UserRecord;
}

/**
 * Home component rendering the actual content - me!
 *
 * See also: {@link HomeContainer}
 */
const HomePage: React.FC<IHomePageProps> = (props: IHomePageProps) => (
  <PageWithHeaderAndFooter
      headerComponent = {<UserHeader user={props.user} jobRequest={props.jobRequest} />}>
    <Leisures leisures={props.leisures} />
  </PageWithHeaderAndFooter>
);

export default HomePage;
