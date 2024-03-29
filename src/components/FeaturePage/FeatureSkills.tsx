import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { makeStyles } from 'tss-react/mui';

import ListItem from '../Ui/ListItem';
import SkillRecord from '../../context/SkillContext/SkillRecord';
import ResponsiveList from '../Ui/ResponsiveList';
import Button from '../Ui/Button';
import Helper from '../../helper/Helper';

/**
 * {@link FeatureSkills} Props.
 */
interface IFeatureSkillsProps {
  /** Skills to display. */
  skills: Array<SkillRecord>;
}

const useStyles = makeStyles()((theme => ({
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
})));

/**
 * Skills.
 *
 * @param props - {@link IFeatureSkillsProps}.
 */
const FeatureSkills: React.FC<IFeatureSkillsProps> = ({ skills, ...rest }: IFeatureSkillsProps) => {
  const { t } = useTranslation();
  const { classes } = useStyles();

  const skillList = skills.map(skill => (
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
        titleClassName={classes.featureSkillsHeading}
        {...rest}>
      {skillList}
    </ResponsiveList>
  );
};

export default FeatureSkills;
