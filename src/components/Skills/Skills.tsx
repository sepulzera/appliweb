import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import CapsHeading from '../Heading/CapsHeading';
import List from '../Ui/List';
import ListItem from '../Ui/ListItem';
import SkillRecord from '../../context/SkillContext/SkillRecord';

/**
 * {@link Skills} Props.
 */
interface ISkillsProps extends WithTranslation {
  /** Leisures to display. */
  skills: Array<SkillRecord>;
}

/**
 * Leisures.
 *
 * @param props - {@link ISkillsProps}.
 */
const Skills: React.FC<ISkillsProps> = (props: ISkillsProps) => {
  const { t } = useTranslation();

  // TODO group skills by category

  const skillList = props.skills.filter(skill => skill.featured).map(skill => (
    <ListItem key={`skills-${skill.id}`}>
      {t(skill.title)}
    </ListItem>
  ));

  return (
    <>
      <CapsHeading>Skills</CapsHeading>
      <List noMarks>
        {skillList}
      </List>
    </>
  );
};

export default withTranslation()(Skills);
