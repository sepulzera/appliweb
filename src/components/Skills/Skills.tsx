import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

import CapsHeading from '../Heading/CapsHeading';
import List from '../Ui/List';
import ListItem from '../Ui/ListItem';
import SkillRecord from '../../context/SkillContext/SkillRecord';
import Helper from '../../helper/Helper';
import Progress from '../Ui/Progress';

/**
 * {@link Skills} Props.
 */
interface ISkillsProps extends WithTranslation {
  /** Leisures to display. */
  skills: Array<SkillRecord>;
}

const useStyles = makeStyles(theme => ({
  skillItem: {
    textTransform: 'capitalize',
    marginBottom:  theme.spacing(1.5),
  },
}));

/**
 * Leisures.
 *
 * @param props - {@link ISkillsProps}.
 */
const Skills: React.FC<ISkillsProps> = (props: ISkillsProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const featuredSkills = props.skills.filter(skill => skill.featured);

  const getSkillListForCategory = (category: string) => (
    featuredSkills
        .filter(skill => skill.category === category)
        .map(skill => (
          <ListItem key={`skills-${skill.id}`} className={classes.skillItem}>
            <>
              {t(`skill:${skill.title}`)}
              <Progress value={skill.rating * 10} />
            </>
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

  return <>{skillCategoryList}</>;
};

export default withTranslation()(Skills);
