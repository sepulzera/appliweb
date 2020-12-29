import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

import ListItem from '../Ui/ListItem';
import SkillRecord from '../../context/SkillContext/SkillRecord';
import ResponsiveList from '../Ui/ResponsiveList';
import P from '../Ui/P';
import Button from '../Ui/Button';

/**
 * {@link FeatureSkills} Props.
 */
interface IFeatureSkillsProps extends WithTranslation {
  /** Skills to display. */
  skills: Array<SkillRecord>;
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
 * Skills.
 *
 * @param props - {@link IFeatureSkillsProps}.
 */
const FeatureSkills: React.FC<IFeatureSkillsProps> = (props: IFeatureSkillsProps) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const skillList = props.skills.map(skill => (
    <ListItem key={`skills-${skill.id}`}>
      <Button component={Link} to={`/home?d=skill&id=${skill.id}`}>
        {t(`skill:${skill.title}`)}
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
