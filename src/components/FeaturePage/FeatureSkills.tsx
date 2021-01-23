import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

import ListItem from '../Ui/ListItem';
import SkillRecord from '../../context/SkillContext/SkillRecord';
import ResponsiveList from '../Ui/ResponsiveList';
import Button from '../Ui/Button';
import Helper from '../../helper/Helper';

/**
 * {@link FeatureSkills} Props.
 */
interface IFeatureSkillsProps extends WithTranslation {
  /** Skills to display. */
  skills: Array<SkillRecord>;
}

const useStyles = makeStyles(theme => ({
  featureSkills: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,

    padding: '0 !important',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '16px !important',
    },
  },
  featureSkillsHeading: {
    fontSize: '1rem',
    lineHeight: '1.75 !important',
    padding: '6px 8px',
  },
  skillItem: {
    margin: 0,
  },
}));

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
      <Button component={Link} to={`${process.env.PUBLIC_URL}/home?d=skill&id=${skill.id}`}>
        {Helper.upperFirst(t(`skill:${skill.title}`))}
      </Button>
    </ListItem>
  ));

  return (
    <ResponsiveList
        title={t('skill:heading')}
        asRow
        className={classes.featureSkills}
        titleClassName={classes.featureSkillsHeading}>
      {skillList}
    </ResponsiveList>
  );
};

export default withTranslation()(FeatureSkills);
