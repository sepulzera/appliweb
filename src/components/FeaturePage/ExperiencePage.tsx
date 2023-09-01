import { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

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

/**
 * Renders a experience page.
 *
 * @param props - {@link IExperiencePageProps}.
 */
const ExperiencePage: React.FC<IExperiencePageProps> = ({ experience, type, isOpen, ...rest }: IExperiencePageProps) => {
  const { t, i18n } = useTranslation();
  const navigate     = useNavigate();

  const featureContext      = useContext(FeatureContext);
  const skillContext        = useContext(SkillContext);
  const skillMappingContext = useContext(SkillMappingContext);
  const taskContext         = useContext(TaskContext);

  const handleBack = useCallback(() => {
    navigate(-1);
  }, []);

  const handleClose = useCallback(() => {
    navigate(`${process.env.PUBLIC_URL}/home`);
  }, []);

  const feature = featureContext.getFeature(experience.feature, i18n.language);
  if (feature == null) return null;

  const skillMappings = skillMappingContext.getSkillMappingsByUserAndType(experience.userId, type, experience.id);
  const skills = skillMappings.map(sm => skillContext.getSkill(sm.skillId)).filter(Boolean) as Array<SkillRecord>;

  const title = Helper.upperFirst(t(`${type}:${experience.title}`));
  document.title = `${title} - Frank Hartung`;

  return (
    <Dialog title={title} isOpen={isOpen} onBack={handleBack} onClose={handleClose} {...rest}>
      <div>
        <Image src={feature.image} />
      </div>
      {skills.length > 0 && <FeatureSkills skills={skills} />}
      <FeatureData data={feature.data} />
      {type === 'career' && <FeatureTasks tasks={taskContext.getTasksForCareer(experience.id)} />}
    </Dialog>
  );
};

export default ExperiencePage;
