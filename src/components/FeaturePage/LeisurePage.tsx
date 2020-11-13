import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import SkillContext from '../../context/SkillContext/SkillContext';
import SkillMappingContext from '../../context/SkillMappingContext/SkillMappingContext';
import SkillRecord from '../../context/SkillContext/SkillRecord';
import LeisureRecord from '../../context/LeisureContext/LeisureRecord';

import Dialog from '../Ui/Dialog';
import Image from '../Ui/Image';
import FeatureSkills from './FeatureSkills';
import Components from './ComponentRenderer';

/**
 * {@link List} Props.
 */
export interface ILeisurePageProps {
  leisure: LeisureRecord;

  /** Is dialog open? */
  isOpen: boolean;
  /** Callback for click. */
  onClose?: () => void;

  onSkillClick: (skill: SkillRecord) => void;
}
type IProps = ILeisurePageProps & WithTranslation;

/**
 * Renders a leisure page.
 *
 * @param props - {@link ILeisurePageProps}.
 */
const LeisurePage: React.FC<IProps> = (props: IProps) => {
  const { t } = useTranslation();

  const skillContext = React.useContext(SkillContext);
  const skillMappingContext = React.useContext(SkillMappingContext);

  if (skillContext == null || skillMappingContext == null) throw new Error('Context unitialized');

  const { leisure, isOpen, onClose } = props;

  const skillMappings = skillMappingContext.getSkillMappingsByUserAndType(leisure.userId, 'leisure', leisure.id);
  const skills = skillMappings.map(sm => skillContext.getSkill(sm.skillId)).filter(skill => skill != null) as Array<SkillRecord>;

  return (
    <Dialog title={t(leisure.title)} isOpen={isOpen} onClose={onClose}>
      <div>
        <Image src={leisure.image} />
        {}
      </div>
      <div>
        <FeatureSkills skills={skills} onSkillClick={props.onSkillClick} />
        {leisure.feature.map(block => Components(block))}
      </div>
    </Dialog>
  );
};

export default withTranslation()(LeisurePage);
