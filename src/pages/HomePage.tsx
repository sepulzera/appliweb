import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { makeStyles } from 'tss-react/mui';

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
import Leisures from '../components/Skills/Leisures';
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
import PageWrapper from '../hoc/Page/PageWrapper';

function useQuery() {
  const location = useLocation();
  return new URLSearchParams(location.search);
}

const useStyles = makeStyles()((theme => ({
  skillsSection: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: `${theme.spacing(1.5)} !important`,
    '& h3': {
      marginLeft: theme.spacing(1),
    },
  },
  stretch: {
    [theme.breakpoints.up('sm')]: {
      height: '1px',
      minHeight: '40rem',
      overflowY: 'auto',
      flexGrow: 1,
    },
  },
})));

/**
 * Home component rendering the actual content - me!
 */
const HomePage: React.FC = () => {
  const { classes } = useStyles();
  const query = useQuery();

  const careerContext       = useContext(CareerContext);
  const educationContext    = useContext(EducationContext);
  const jobRequestContext   = useContext(JobRequestContext);
  const leisureContext      = useContext(LeisureContext);
  const skillContext        = useContext(SkillContext);
  const skillMappingContext = useContext(SkillMappingContext);
  const userContext         = useContext(UserContext);

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
  const skills        = skillMappings.map(sm => skillContext.getSkill(sm.skillId)).filter(Boolean) as Array<SkillRecord>;

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

  if (queryDialogType == null) {
    document.title = 'Frank Hartung';
  }

  return (
    <PageWrapper title=''>
      <PageWithHeaderAndFooter
          headerComponent = {(
            <UserHeader
                user = {user}
                jobRequest = {jobRequest}
                highestEducation = {Helper.getHighestEducation(educations)}
                latestCareer = {careers?.[0]} />
          )}>
        <Grid>
          <GridItem xs={12} sm={4} md={3} className={classes.skillsSection}>
            <div className={classes.stretch}>
              <Skills   skills={skills} />
              <Leisures leisures={leisures} />
            </div>
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
    </PageWrapper>
  );
};

export default HomePage;
