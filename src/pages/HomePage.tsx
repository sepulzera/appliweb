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
import LeisurePage from '../components/FeaturePage/LeisurePage';
import SkillSelectDialog from '../components/SkillSelectDialog/SkillSelectDialog';
import ExperienceRecord from '../context/Experience/ExperienceRecord';

/**
 * {@link HomePage} Props.
 */
interface IHomePageProps {
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
const HomePage: React.FC<IHomePageProps> = (props: IHomePageProps) => {
  const [selectedSkill, setSelectedSkill] = React.useState<SkillRecord | undefined>(undefined);
  const [openLeisurePage, setOpenLeisurePage] = React.useState<LeisureRecord | undefined>(undefined);

  const handleSkillClick = (skill: SkillRecord) => {
    const selectedSkillMappings: Array<SkillMappingRecord> = props.skillMappings.filter(sm => sm.skillId === skill.id);
    if (selectedSkillMappings.length === 1) {
      const sm = selectedSkillMappings[0];
      if (sm.type === 'leisure') {
        const selLeisure: LeisureRecord | undefined = props.leisures.find(item => item.id === sm.typeId);
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
          headerComponent = {<UserHeader user={props.user} jobRequest={props.jobRequest} />}>
        <Grid>
          <GridItem xs={12} sm={4} md={3}>
            <Skills   skills={props.skills}     onSkillClick={handleSkillClick} />
            <Leisures leisures={props.leisures} onLeisureClick={handleLeisureClick} />
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
            skillMappings = {props.skillMappings}
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
