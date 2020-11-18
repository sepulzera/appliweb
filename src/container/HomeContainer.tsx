import React from 'react';

import EducationContext from '../context/EducationContext /EducationContext';
import JobRequestContext from '../context/JobRequestContext/JobRequestContext';
import LeisureContext from '../context/LeisureContext/LeisureContext';
import SkillContext from '../context/SkillContext/SkillContext';
import SkillMappingContext from '../context/SkillMappingContext/SkillMappingContext';
import UserContext from '../context/UserContext/UserContext';

import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import SkillRecord from '../context/SkillContext/SkillRecord';

/**
 * Homepage rendering the actual content - me!
 *
 * See also: {@link HomePage}
 */
const HomeContainer: React.FC<{}> = () => {
  const educationContext    = React.useContext(EducationContext);
  const jobRequestContext   = React.useContext(JobRequestContext);
  const leisureContext      = React.useContext(LeisureContext);
  const skillContext        = React.useContext(SkillContext);
  const skillMappingContext = React.useContext(SkillMappingContext);
  const userContext         = React.useContext(UserContext);

  if (educationContext == null || jobRequestContext == null || leisureContext == null || skillContext == null || skillMappingContext == null || userContext == null) throw new Error('Context unitialized');

  // HACK: There is only one user - me!
  const userId = 1;
  const user   = userContext.getUser(userId);

  if (user == null) {
    return <ErrorPage title='error:user not found title' message='error:user not found message' />;
  }

  const educations    = educationContext.getEducationsForUser(user.id);
  const jobRequest    = jobRequestContext.getJobRequestForUser(user.id);
  const leisures      = leisureContext.getLeisuresForUser(user.id);
  const skillMappings = skillMappingContext.getSkillMappingsByUser(user.id);
  const skills        = skillMappings.map(sm => skillContext.getSkill(sm.skillId)).filter(skill => skill != null) as Array<SkillRecord>;

  return (
    <HomePage
        educations    = {educations}
        jobRequest    = {jobRequest}
        leisures      = {leisures}
        skillMappings = {skillMappings}
        skills        = {skills}
        user          = {user} />
  );
};

export default HomeContainer;
