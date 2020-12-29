import React from 'react';

import { useLocation } from 'react-router-dom';

import EducationContext from '../context/EducationContext/EducationContext';
import JobRequestContext from '../context/JobRequestContext/JobRequestContext';
import LeisureContext from '../context/LeisureContext/LeisureContext';
import SkillContext from '../context/SkillContext/SkillContext';
import SkillMappingContext from '../context/SkillMappingContext/SkillMappingContext';
import UserContext from '../context/UserContext/UserContext';

import SkillRecord from '../context/SkillContext/SkillRecord';
import ExperienceRecord from '../context/Experience/ExperienceRecord';

import Grid from '../components/Ui/Grid';
import GridItem from '../components/Ui/GridItem';
import Leisures from '../components/Leisures/Leisures';
import Skills from '../components/Skills/Skills';
import SkillSelectDialog from '../components/SkillSelectDialog/SkillSelectDialog';
import PageWithHeaderAndFooter from '../hoc/Page/PageWithHeaderAndFooter';
import UserHeader from '../components/UserHeader/UserHeader';

import ErrorPage from './ErrorPage';
import Helper from '../helper/Helper';
import EducationTimeline from '../components/EducationTimeline/EducationTimeline';
import ExperiencePage from '../components/FeaturePage/ExperiencePage';
import CareerContext from '../context/CareerContext/CareerContext';
import CareerTimeline from '../components/CareerTimeline/CareerTimeline';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

/**
 * Home component rendering the actual content - me!
 */
const HomePage: React.FC<{}> = () => {
  const careerContext       = React.useContext(CareerContext);
  const educationContext    = React.useContext(EducationContext);
  const jobRequestContext   = React.useContext(JobRequestContext);
  const leisureContext      = React.useContext(LeisureContext);
  const skillContext        = React.useContext(SkillContext);
  const skillMappingContext = React.useContext(SkillMappingContext);
  const userContext         = React.useContext(UserContext);

  if (careerContext == null || educationContext == null || jobRequestContext == null || leisureContext == null || skillContext == null || skillMappingContext == null || userContext == null) throw new Error('Context uninitialized');

  // HACK: There is only one user - me!
  const userId = 1;
  const user   = userContext.getUser(userId);

  if (user == null) {
    return <ErrorPage title='error:user not found title' message='error:user not found message' />;
  }

  const careers       = careerContext.getCareersForUser(user.id);
  const educations    = educationContext.getEducationsForUser(user.id);
  const jobRequest    = jobRequestContext.getJobRequestForUser(user.id);
  const leisures      = leisureContext.getLeisuresForUser(user.id);
  const skillMappings = skillMappingContext.getSkillMappingsByUser(user.id);
  const skills        = skillMappings.map(sm => skillContext.getSkill(sm.skillId)).filter(skill => skill != null) as Array<SkillRecord>;

  const query = useQuery();
  const queryDialogType = query.get('d');
  const openDialogType: 'career' | 'education' | 'leisure' | 'skill' | undefined = (queryDialogType != null
      && (queryDialogType === 'career' || queryDialogType === 'education' || queryDialogType === 'leisure' || queryDialogType === 'skill')) ? queryDialogType : undefined;
  const openDialogId   = Helper.parseInt(query.get('id'), 1);

  let experience: ExperienceRecord | undefined;
  switch (openDialogType) {
    case 'career':    experience = careerContext.getCareer(openDialogId); break;
    case 'education': experience = educationContext.getEducation(openDialogId); break;
    case 'leisure':   experience = leisureContext.getLeisure(openDialogId); break;
    default:          break;
  }

  const selectedSkill: SkillRecord | undefined = openDialogType != null && openDialogType === 'skill' ? skillContext.getSkill(openDialogId) : undefined;

  return (
    <>
      <PageWithHeaderAndFooter
          headerComponent = {(
            <UserHeader
                user = {user}
                jobRequest = {jobRequest}
                highestEducation = {Helper.getHighestEducation(educations)}
                latestCareer = {careers != null && careers.length > 0 ? careers[0] : undefined} />
          )}>
        <Grid>
          <GridItem xs={12} sm={4} md={3}>
            <Skills   skills={skills} />
            <Leisures leisures={leisures} />
          </GridItem>
          <GridItem md>
            {careers    != null && careers.length    > 0 && <CareerTimeline    careers={careers} />}
            {educations != null && educations.length > 0 && <EducationTimeline educations={educations} />}
          </GridItem>
        </Grid>
      </PageWithHeaderAndFooter>

      {openDialogType != null && openDialogType === 'skill' && selectedSkill != null && (
        <SkillSelectDialog
            skill    = {selectedSkill}
            skillMappings = {skillMappings} />
      )}

      {openDialogType != null && openDialogType !== 'skill' && experience != null && (
        <ExperiencePage
            experience = {experience}
            type       = {openDialogType}
            isOpen />
      )}
    </>
  );
};

export default HomePage;
