import React from 'react';

import EducationContext from '../context/EducationContext /EducationContext';
import JobRequestContext from '../context/JobRequestContext/JobRequestContext';
import LeisureContext from '../context/LeisureContext/LeisureContext';
import SkillContext from '../context/SkillContext/SkillContext';
import SkillMappingContext from '../context/SkillMappingContext/SkillMappingContext';
import UserContext from '../context/UserContext/UserContext';

import LeisureRecord from '../context/LeisureContext/LeisureRecord';
import SkillMappingRecord from '../context/SkillMappingContext/SkillMappingRecord';
import SkillRecord from '../context/SkillContext/SkillRecord';
import ExperienceRecord from '../context/Experience/ExperienceRecord';

import Grid from '../components/Ui/Grid';
import GridItem from '../components/Ui/GridItem';
import LeisurePage from '../components/FeaturePage/LeisurePage';
import Leisures from '../components/Leisures/Leisures';
import Skills from '../components/Skills/Skills';
import SkillSelectDialog from '../components/SkillSelectDialog/SkillSelectDialog';
import PageWithHeaderAndFooter from '../hoc/Page/PageWithHeaderAndFooter';
import UserHeader from '../components/UserHeader/UserHeader';

import ErrorPage from './ErrorPage';
import Helper from '../helper/Helper';

/**
 * Home component rendering the actual content - me!
 */
const HomePage: React.FC<{}> = () => {
  const [selectedSkill   , setSelectedSkill]   = React.useState<SkillRecord   | undefined>(undefined);
  const [openLeisurePage , setOpenLeisurePage] = React.useState<LeisureRecord | undefined>(undefined);

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

  const handleSkillClick = (skill: SkillRecord) => {
    const selectedSkillMappings: Array<SkillMappingRecord> = skillMappings.filter(sm => sm.skillId === skill.id);
    if (selectedSkillMappings.length === 1) {
      const sm = selectedSkillMappings[0];
      if (sm.type === 'leisure') {
        const selLeisure: LeisureRecord | undefined = leisures.find(item => item.id === sm.typeId);
        if (selLeisure != null) {
          setOpenLeisurePage(selLeisure);
        }
      }
    } else if (selectedSkillMappings.length > 1) {
      setOpenLeisurePage(undefined);
      setSelectedSkill(skill);
    }
  };

  const handleSkillClose = () => {
    setSelectedSkill(undefined);
  };

  const handleLeisureClick = (leisure: LeisureRecord) => {
      setSelectedSkill(undefined);
    setOpenLeisurePage(leisure);
  };

  const handleLeisurePageClose = () => {
    setOpenLeisurePage(undefined);
  };

  const handleExperienceSelect = (record: ExperienceRecord) => {
    if (record instanceof LeisureRecord) {
      handleLeisureClick(record);
    }
  };

  return (
    <>
      <PageWithHeaderAndFooter
          headerComponent = {<UserHeader user={user} jobRequest={jobRequest} highestEducation={Helper.getHighestEducation(educations)} />}>
        <Grid>
          <GridItem xs={12} sm={4} md={3}>
            <Skills   skills={skills}     onSkillClick={handleSkillClick} />
            <Leisures leisures={leisures} onLeisureClick={handleLeisureClick} />
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

      {selectedSkill != null && (
        <SkillSelectDialog
            skill    = {selectedSkill}
            skillMappings = {skillMappings}
            onSelect = {handleExperienceSelect}
            onClose  = {handleSkillClose} />
      )}

      {openLeisurePage != null && (
        <LeisurePage
            leisure = {openLeisurePage}
            isOpen  = {openLeisurePage != null}
            onSkillClick = {handleSkillClick}
            onClose = {handleLeisurePageClose} />
      )}
    </>
  );
};

export default HomePage;
