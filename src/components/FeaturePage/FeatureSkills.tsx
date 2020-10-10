import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import ListItem from '../Ui/ListItem';
import SkillRecord from '../../context/SkillContext/SkillRecord';
import ResponsiveList from '../Ui/ResponsiveList';
import P from '../Ui/P';

/**
 * {@link FeatureSkills} Props.
 */
interface IFeatureSkillsProps extends WithTranslation {
  /** Leisures to display. */
  skills: Array<SkillRecord>;
}

const useStyles = makeStyles({
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

  const skillList = props.skills.filter(skill => skill.featured).map(skill => (
    <ListItem key={`skills-${skill.id}`}>
      <P className={classes.skillItem}>{t(`skill:${skill.title}`)}</P>
    </ListItem>
  ));

  return (
    <ResponsiveList
        title={t('skill:heading')}
        asRow>
      {skillList}
    </ResponsiveList>
  );
};

export default withTranslation()(FeatureSkills);
