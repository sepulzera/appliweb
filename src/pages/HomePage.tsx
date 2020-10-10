import React from 'react';

import UserHeader from '../components/UserHeader/UserHeader';
import PageWithHeaderAndFooter from '../hoc/Page/PageWithHeaderAndFooter';
import JobRequestRecord from '../context/JobRequestContext/JobRequestRecord';
import UserRecord from '../context/UserContext/UserRecord';
import LeisureRecord from '../context/LeisureContext/LeisureRecord';
import Leisures from '../components/Leisures/Leisures';
import Grid from '../components/Ui/Grid';
import GridItem from '../components/Ui/GridItem';
import SkillMappingRecord from '../context/SkillMappingContext/SkillMappingRecord';
import SkillRecord from '../context/SkillContext/SkillRecord';
import Skills from '../components/Skills/Skills';

/**
 * {@link HomePage} Props.
 */
interface IHomePageProps {
  userId:        number;
  skills:        Array<SkillRecord>;
  skillMappings: Array<SkillMappingRecord>;
  jobRequest:    JobRequestRecord | undefined;
  leisures:      Array<LeisureRecord>;
  user:          UserRecord;
}

/**
 * Home component rendering the actual content - me!
 *
 * See also: {@link HomeContainer}
 */
const HomePage: React.FC<IHomePageProps> = (props: IHomePageProps) => (
  <PageWithHeaderAndFooter
      headerComponent = {<UserHeader user={props.user} jobRequest={props.jobRequest} />}>
    <Grid>
      <GridItem xs={12} sm={4} md={3}>
        <Skills   skills={props.skills} />
        <Leisures userId={props.userId} leisures={props.leisures} />
      </GridItem>
      <GridItem md>
        <div style={{
          backgroundColor: '#777',
          width: '100%',
          height: '100%',
        }}>
          <span>TODO</span>
        </div>
      </GridItem>
    </Grid>
  </PageWithHeaderAndFooter>
);

export default HomePage;
