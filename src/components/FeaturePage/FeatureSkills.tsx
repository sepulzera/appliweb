import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import ListItem from '../Ui/ListItem';
import SkillRecord from '../../context/SkillContext/SkillRecord';
import ResponsiveList from '../Ui/ResponsiveList';
import P from '../Ui/P';
import Button from '../Ui/Button';

/**
 * {@link FeatureSkills} Props.
 */
interface IFeatureSkillsProps extends WithTranslation {
  /** Leisures to display. */
  skills: Array<SkillRecord>;

  onSkillClick: (skill: SkillRecord) => void;
}

const useStyles = makeStyles({
  featureSkills: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  skillItem: {
    margin: 0,
    textTransform: 'capitalize',
  },
});

/**
 * Leisures.
 *
 * @param props - {@link IFeatureSkillsProps}.
 */
const FeatureSkills: React.FC<IFeatureSkillsProps> = (props: IFeatureSkillsProps) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const skillList = props.skills.map(skill => (
    <ListItem key={`skills-${skill.id}`}>
      <Button id={`skill-${skill.id}`} onClick={() => props.onSkillClick(skill)}>
        <P className={classes.skillItem}>{t(`skill:${skill.title}`)}</P>
      </Button>
    </ListItem>
  ));

  return (
    <ResponsiveList
        title={t('skill:heading')}
        asRow
        className={classes.featureSkills}>
      {skillList}
    </ResponsiveList>
  );
};

export default withTranslation()(FeatureSkills);
