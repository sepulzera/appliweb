import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { makeStyles } from 'tss-react/mui';

import CapsHeading from '../Heading/CapsHeading';
import List from '../Ui/List';
import ListItem from '../Ui/ListItem';
import SkillRecord from '../../context/SkillContext/SkillRecord';
import Helper from '../../helper/Helper';
import Progress from '../Ui/Progress';
import Button from '../Ui/Button';

/**
 * {@link Skills} Props.
 */
interface ISkillsProps {
  /** Leisures to display. */
  skills: Array<SkillRecord>;
}

const useStyles = makeStyles()((theme => ({
  skills: {
    '& >h3:first-of-type': {
      marginTop: 0,
    },
  },
  skillsList: {
    marginRight: theme.spacing(1),
  },
  skillItem: {
    marginBottom:  theme.spacing(1.5),
    '& a.MuiButton-text:first-letter': {
      textTransform: 'uppercase',
    },
  },
  skillButton: {
    fontWeight: 'normal',
    textAlign: 'left',
    display: 'block',
   },
})));

/**
 * Skills.
 *
 * @param props - {@link ISkillsProps}.
 */
const Skills: React.FC<ISkillsProps> = ({ skills, ...rest }: ISkillsProps) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const featuredSkills = Helper.getUnique(skills.filter(skill => skill.featured), 'id');

  const getSkillListForCategory = (category: string) => (
    featuredSkills
        .filter(skill => skill.category === category)
        .map(skill => (
          <ListItem key={`skills-${category}-${skill.id}`} className={classes.skillItem}>
            <Button fullWidth className={classes.skillButton} component={Link} to={`${process.env.PUBLIC_URL}/home?d=skill&id=${skill.id}`}>
              {t(`skill:${skill.title}`)}
              <Progress value={skill.rating * 10} />
            </Button>
          </ListItem>
        ))
  );

  const skillCategories: Array<string> = Helper.getUnique(featuredSkills, 'category').map(skill => skill.category);

  const skillCategoryList: Array<React.ReactElement> = skillCategories.map(nextCategory => (
    <Fragment key={`skills-category-${nextCategory}`}>
      <CapsHeading>{t(`skill:${nextCategory}`)}</CapsHeading>
      <List noMarks className={classes.skillsList}>
        {getSkillListForCategory(nextCategory)}
      </List>
    </Fragment>
  ));

  return (
    <div className={classes.skills} {...rest}>
      {skillCategoryList}
    </div>
  );
};

export default Skills;
