import { Fragment, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import { makeStyles } from 'tss-react/mui';
import { List, ListItem, ListItemText } from '@mui/material';

import CareerContext from '../../context/CareerContext/CareerContext';
import EducationContext from '../../context/EducationContext/EducationContext';
import LeisureContext from '../../context/LeisureContext/LeisureContext';
import SkillRecord from '../../context/SkillContext/SkillRecord';
import SkillMappingRecord from '../../context/SkillMappingContext/SkillMappingRecord';

import Dialog from '../Ui/Dialog';
import H from '../Ui/H';
import Helper from '../../helper/Helper';

/**
 * {@link ISKillSelectDialogProps} Props.
 */
export interface ISKillSelectDialogProps {
  /** The selected skill. Leave undefined to not show. */
  skill: SkillRecord | undefined;
  skillMappings: Array<SkillMappingRecord>;
}

const useStyles = makeStyles()((theme => ({
  categoryHeading: {
    marginTop:    theme.spacing(2),
    marginBottom: 0,
    marginLeft:   theme.spacing(2),

    textTransform: 'capitalize',
  },
})));

/**
 * Dialog for the given skill to select a feature page from a list.
 *
 * @param props - {@link ISKillSelectDialogProps}.
 */
const SKillSelectDialog: React.FC<ISKillSelectDialogProps> = (props: ISKillSelectDialogProps) => {
  const { classes } = useStyles();
  const { t }   = useTranslation();
  const navigate = useNavigate();

  const careerContext    = useContext(CareerContext);
  const educationContext = useContext(EducationContext);
  const leisureContext   = useContext(LeisureContext);
  if (careerContext == null || educationContext == null || leisureContext == null) throw new Error('Context uninitialized');

  const handleBack = () => {
    navigate(-1);
  };

  const handleClose = () => {
    navigate(`${process.env.PUBLIC_URL}/home`);
  };

  const { skill, skillMappings } = props;

  const categories: Array<React.ReactNode> = [];

  if (skill != null) {
    const smForCareers = skillMappings.filter(sm => sm.type === 'career' && sm.skillId === skill.id);
    if (smForCareers.length > 0) {
      const careers: Array<React.ReactNode> = [];
      for (let index = 0; index < smForCareers.length; ++index) {
        const education = careerContext.getCareer(smForCareers[index].typeId);
        if (education == null) continue;
        careers.push(
          <ListItem key={`career-${education.title}`} button dense component={Link} to={`${process.env.PUBLIC_URL}/home?d=career&id=${education.id}`}>
            <ListItemText primary={t(`career:${education.title}`)} />
          </ListItem>
        );
      }

      categories.push(
        <Fragment key='careers'>
          <H variant='h3' className={classes.categoryHeading}>{t('career:heading')}</H>
          <List>
            {careers}
          </List>
        </Fragment>
      );
    }

    const smForEducations = skillMappings.filter(sm => sm.type === 'education' && sm.skillId === skill.id);
    if (smForEducations.length > 0) {
      const educations: Array<React.ReactNode> = [];
      for (let index = 0; index < smForEducations.length; ++index) {
        const education = educationContext.getEducation(smForEducations[index].typeId);
        if (education == null) continue;
        educations.push(
          <ListItem key={`education-${education.title}`} button dense component={Link} to={`${process.env.PUBLIC_URL}/home?d=education&id=${education.id}`}>
            <ListItemText primary={t(`education:${education.title}`)} />
          </ListItem>
        );
      }

      categories.push(
        <Fragment key='educations'>
          <H variant='h3' className={classes.categoryHeading}>{t('education:heading')}</H>
          <List>
            {educations}
          </List>
        </Fragment>
      );
    }

    const smForLeisures = skillMappings.filter(sm => sm.type === 'leisure' && sm.skillId === skill.id);
    if (smForLeisures.length > 0) {
      const leisures: Array<React.ReactNode> = [];
      for (let index = 0; index < smForLeisures.length; ++index) {
        const leisure = leisureContext.getLeisure(smForLeisures[index].typeId);
        if (leisure == null) continue;
        leisures.push(
          <ListItem key={`leisure-${leisure.title}`} button dense component={Link} to={`${process.env.PUBLIC_URL}/home?d=leisure&id=${leisure.id}`}>
            <ListItemText primary={t(`leisure:${leisure.title}`)} />
          </ListItem>
        );
      }

      categories.push(
        <Fragment key='leisures'>
          <H variant='h3' className={classes.categoryHeading}>{t('leisure:heading')}</H>
          <List>
            {leisures}
          </List>
        </Fragment>
      );
    }
  }

  let title: string | undefined;

  if (skill != null) {
    title = Helper.upperFirst(t(`skill:${skill.title}`));
    document.title = `${title} - Frank Hartung`;
  }

  return (
    <Dialog title={`${t('skill:skill')}: ${skill != null ? title : ''}`} isOpen={skill != null} onBack={handleBack} onClose={handleClose}>
      {categories}
    </Dialog>
  );
};

export default SKillSelectDialog;
