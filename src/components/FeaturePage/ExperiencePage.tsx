import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import FeatureContext from '../../context/FeatureContext/FeatureContext';
import SkillContext from '../../context/SkillContext/SkillContext';
import SkillMappingContext from '../../context/SkillMappingContext/SkillMappingContext';
import SkillRecord from '../../context/SkillContext/SkillRecord';

import Dialog from '../Ui/Dialog';
import Image from '../Ui/Image';
import FeatureSkills from './FeatureSkills';
import FeatureData from './FeatureData';
import ExperienceRecord from '../../context/Experience/ExperienceRecord';
import TaskContext from '../../context/TaskContext/TaskContext';
import FeatureTasks from './FeatureTasks';
import Helper from '../../helper/Helper';

/**
 * {@link ExperiencePage} Props.
 */
export interface IExperiencePageProps {
  /** Experience Record, e. g. leisure record. */
  experience: ExperienceRecord;
  /** Specific type of the experience record. */
  type: 'leisure' | 'education' | 'career' | 'task';

  /** Is dialog open? */
  isOpen: boolean;
}
type IProps = IExperiencePageProps & WithTranslation;

/**
 * Renders a experience page.
 *
 * @param props - {@link IExperiencePageProps}.
 */
const ExperiencePage: React.FC<IProps> = (props: IProps) => {
  const { t, i18n } = useTranslation();
  const history     = useHistory();

  const featureContext      = React.useContext(FeatureContext);
  const skillContext        = React.useContext(SkillContext);
  const skillMappingContext = React.useContext(SkillMappingContext);
  const taskContext         = React.useContext(TaskContext);

  if (featureContext == null || skillContext == null || skillMappingContext == null || taskContext == null) throw new Error('Context uninitialized');

  const handleBack = () => {
    history.goBack();
  };

  const handleClose = () => {
    history.push(`${process.env.PUBLIC_URL}/home`);
  };

  const { experience, type, isOpen } = props;

  const feature = featureContext.getFeature(experience.feature, i18n.language);
  if (feature == null) return null;

  const skillMappings = skillMappingContext.getSkillMappingsByUserAndType(experience.userId, type, experience.id);
  const skills = skillMappings.map(sm => skillContext.getSkill(sm.skillId)).filter(skill => skill != null) as Array<SkillRecord>;

  const title = Helper.upperFirst(t(`${type}:${experience.title}`));
  document.title = `${title} - Frank Hartung`;

  return (
    <Dialog title={title} isOpen={isOpen} onBack={handleBack} onClose={handleClose}>
      <div>
        <Image src={feature.image} />
      </div>
      {skills.length > 0 && <FeatureSkills skills={skills} />}
      <FeatureData data={feature.data} />
      {props.type === 'career' && <FeatureTasks tasks={taskContext.getTasksForCareer(experience.id)} />}
    </Dialog>
  );
};

export default withTranslation()(ExperiencePage);
