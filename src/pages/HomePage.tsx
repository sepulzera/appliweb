import React from 'react';

import EducationContext from '../context/EducationContext/EducationContext';
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
import Leisures from '../components/Leisures/Leisures';
import Skills from '../components/Skills/Skills';
import SkillSelectDialog from '../components/SkillSelectDialog/SkillSelectDialog';
import PageWithHeaderAndFooter from '../hoc/Page/PageWithHeaderAndFooter';
import UserHeader from '../components/UserHeader/UserHeader';

import ErrorPage from './ErrorPage';
import Helper from '../helper/Helper';
import EducationTimeline from '../components/EducationTimeline/EducationTimeline';
import EducationRecord from '../context/EducationContext/EducationRecord';
import ExperiencePage from '../components/FeaturePage/ExperiencePage';
import CareerContext from '../context/CareerContext/CareerContext';
import CareerRecord from '../context/CareerContext/CareerRecord';
import CareerTimeline from '../components/CareerTimeline/CareerTimeline';
import TaskRecord from '../context/TaskContext/TaskRecord';

/**
 * Home component rendering the actual content - me!
 */
const HomePage: React.FC<{}> = () => {
  const [selectedSkill     , setSelectedSkill]     = React.useState<SkillRecord     | undefined>(undefined);
  const [openCareerPage    , setOpenCareerPage]    = React.useState<CareerRecord    | undefined>(undefined);
  const [openEducationPage , setOpenEducationPage] = React.useState<EducationRecord | undefined>(undefined);
  const [openLeisurePage   , setOpenLeisurePage]   = React.useState<LeisureRecord   | undefined>(undefined);
  const [openTaskPage      , setOpenTaskPage]      = React.useState<TaskRecord      | undefined>(undefined);

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

  const handleSkillClick = (skill: SkillRecord) => {
    const selectedSkillMappings: Array<SkillMappingRecord> = skillMappings.filter(sm => sm.skillId === skill.id);
    if (selectedSkillMappings.length === 1) {
      const sm = selectedSkillMappings[0];
      if (sm.type === 'leisure') {
        const selLeisure: LeisureRecord | undefined = leisures.find(item => item.id === sm.typeId);
        if (selLeisure != null) {
          setOpenLeisurePage(selLeisure);
        }
      } else if (sm.type === 'education') {
        const selEducation: EducationRecord | undefined = educations.find(item => item.id === sm.typeId);
        if (selEducation != null) {
          setOpenEducationPage(selEducation);
        }
      }
    } else if (selectedSkillMappings.length > 1) {
      setOpenLeisurePage(undefined);
      setOpenEducationPage(undefined);
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

  const handleCareerClick = (car: CareerRecord) => {
    setSelectedSkill(undefined);
    setOpenCareerPage(car);
  };

  const handleCareerPageClose = () => {
    setOpenCareerPage(undefined);
  };

  const handleTaskClick = (task: TaskRecord) => {
    setSelectedSkill(undefined);
    setOpenCareerPage(undefined);
    setOpenTaskPage(task);
  };

  const handleTaskPageClose = () => {
    setOpenTaskPage(undefined);
  };

  const handleEducationClick = (edu: EducationRecord) => {
    setSelectedSkill(undefined);
    setOpenEducationPage(edu);
  };

  const handleEducationPageClose = () => {
    setOpenEducationPage(undefined);
  };

  const handleExperienceSelect = (record: ExperienceRecord) => {
    if (record instanceof LeisureRecord) {
      handleLeisureClick(record);
    } else if (record instanceof EducationRecord) {
      handleEducationClick(record);
    }
  };

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
            <Skills   skills={skills}     onSkillClick={handleSkillClick} />
            <Leisures leisures={leisures} onLeisureClick={handleLeisureClick} />
          </GridItem>
          <GridItem md>
            {careers    != null && careers.length    > 0 && <CareerTimeline    careers={careers}       onCareerClick={handleCareerClick} />}
            {educations != null && educations.length > 0 && <EducationTimeline educations={educations} onEducationClick={handleEducationClick} />}
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
        <ExperiencePage
            experience = {openLeisurePage}
            type       = 'leisure'
            isOpen     = {openLeisurePage != null}
            onSkillClick = {handleSkillClick}
            onClose      = {handleLeisurePageClose} />
      )}

      {openCareerPage != null && (
        <ExperiencePage
            experience = {openCareerPage}
            type       = 'career'
            isOpen     = {openCareerPage != null}
            onSkillClick = {handleSkillClick}
            onTaskClick  = {handleTaskClick}
            onClose      = {handleCareerPageClose} />
      )}

      {openTaskPage != null && (
        <ExperiencePage
            experience = {openTaskPage}
            type       = 'task'
            isOpen     = {openTaskPage != null}
            onSkillClick = {handleSkillClick}
            onClose      = {handleTaskPageClose} />
      )}

      {openEducationPage != null && (
        <ExperiencePage
            experience = {openEducationPage}
            type       = 'education'
            isOpen     = {openEducationPage != null}
            onSkillClick = {handleSkillClick}
            onClose      = {handleEducationPageClose} />
      )}
    </>
  );
};

export default HomePage;
