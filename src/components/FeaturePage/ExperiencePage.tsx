import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import FeatureContext from '../../context/FeatureContext/FeatureContext';
import SkillContext from '../../context/SkillContext/SkillContext';
import SkillMappingContext from '../../context/SkillMappingContext/SkillMappingContext';
import SkillRecord from '../../context/SkillContext/SkillRecord';

import Dialog from '../Ui/Dialog';
import Image from '../Ui/Image';
import FeatureSkills from './FeatureSkills';
import FeatureData from './FeatureData';
import ExperienceRecord from '../../context/Experience/ExperienceRecord';
import TaskRecord from '../../context/TaskContext/TaskRecord';
import TaskContext from '../../context/TaskContext/TaskContext';
import FeatureTasks from './FeatureTasks';

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
  /** Callback when closing. */
  onClose?: () => void;
  /** Callback when clicking on a skill. */
  onSkillClick: (skill: SkillRecord) => void;
  /** Callback when clicking on a task. */
  onTaskClick?: (task: TaskRecord) => void;
}
type IProps = IExperiencePageProps & WithTranslation;

/**
 * Renders a experience page.
 *
 * @param props - {@link IExperiencePageProps}.
 */
const ExperiencePage: React.FC<IProps> = (props: IProps) => {
  const { t, i18n } = useTranslation();

  const featureContext      = React.useContext(FeatureContext);
  const skillContext        = React.useContext(SkillContext);
  const skillMappingContext = React.useContext(SkillMappingContext);
  const taskContext         = React.useContext(TaskContext);

  if (featureContext == null || skillContext == null || skillMappingContext == null || taskContext == null) throw new Error('Context uninitialized');

  const handleTaskClick = (task: TaskRecord) => {
    if (props.onTaskClick != null) {
      props.onTaskClick(task);
    }
  };

  const { experience, type, isOpen, onClose } = props;

  const feature = featureContext.getFeature(experience.feature, i18n.language);
  if (feature == null) return null;

  const skillMappings = skillMappingContext.getSkillMappingsByUserAndType(experience.userId, type, experience.id);
  const skills = skillMappings.map(sm => skillContext.getSkill(sm.skillId)).filter(skill => skill != null) as Array<SkillRecord>;

  return (
    <Dialog title={t(`${type}:${experience.title}`)} isOpen={isOpen} onClose={onClose}>
      <div>
        <Image src={feature.image} />
      </div>
      {skills.length > 0 && <FeatureSkills skills={skills} onSkillClick={props.onSkillClick} />}
      <FeatureData data={feature.data} />
      {props.type === 'career' && <FeatureTasks tasks={taskContext.getTasksForCareer(experience.id)} onTaskClick={handleTaskClick} />}
    </Dialog>
  );
};

export default withTranslation()(ExperiencePage);
