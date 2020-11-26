import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

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
interface ISkillsProps extends WithTranslation {
  /** Leisures to display. */
  skills: Array<SkillRecord>;
  /** Callback when clicking on a skill. */
  onSkillClick: (skill: SkillRecord) => void;
}

const useStyles = makeStyles(theme => ({
  skills: {
    '& >h3:first-child': {
      marginTop: 0,
    },
  },
  skillItem: {
    textTransform: 'capitalize',
    marginBottom:  theme.spacing(1.5),
  },
  skillButton: {
    fontWeight: 'normal',
    textAlign: 'left',
    '& > .MuiButton-label': {
      display: 'block',
    },
  },
}));

/**
 * Skills.
 *
 * @param props - {@link ISkillsProps}.
 */
const Skills: React.FC<ISkillsProps> = (props: ISkillsProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const featuredSkills = Helper.getUnique(props.skills.filter(skill => skill.featured), 'id');

  const getSkillListForCategory = (category: string) => (
    featuredSkills
        .filter(skill => skill.category === category)
        .map(skill => (
          <ListItem key={`skills-${skill.id}`} className={classes.skillItem}>
            <Button fullWidth className={classes.skillButton} onClick={() => props.onSkillClick(skill)}>
              {t(`skill:${skill.title}`)}
              <Progress value={skill.rating * 10} />
            </Button>
          </ListItem>
        ))
  );

  const skillCategories: Array<string> = Helper.getUnique(featuredSkills, 'category').map(skill => skill.category);

  const skillCategoryList: Array<React.ReactElement> = [];
  let index: number, nextCategory: string;
  for (index = 0; index < skillCategories.length; ++index) {
    nextCategory = skillCategories[index];
    skillCategoryList.push(
      <React.Fragment key={`skills-category-${nextCategory}`}>
        <CapsHeading>{t(`skill:${nextCategory}`)}</CapsHeading>
        <List noMarks>
          {getSkillListForCategory(nextCategory)}
        </List>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.skills}>
      {skillCategoryList}
    </div>
  );
};

export default withTranslation()(Skills);
