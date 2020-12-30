import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

import CareerContext from '../../context/CareerContext/CareerContext';
import EducationContext from '../../context/EducationContext/EducationContext';
import LeisureContext from '../../context/LeisureContext/LeisureContext';
import SkillRecord from '../../context/SkillContext/SkillRecord';
import SkillMappingRecord from '../../context/SkillMappingContext/SkillMappingRecord';

import Dialog from '../Ui/Dialog';
import H from '../Ui/H';

/**
 * {@link ISKillSelectDialogProps} Props.
 */
export interface ISKillSelectDialogProps {
  /** The selected skill. Leave undefined to not show. */
  skill: SkillRecord | undefined;
  skillMappings: Array<SkillMappingRecord>;
}

type IProps = ISKillSelectDialogProps & WithTranslation;

const useStyles = makeStyles(theme => ({
  categoryHeading: {
    marginTop:    theme.spacing(2),
    marginBottom: 0,
    marginLeft:   theme.spacing(2),
  },
  skillItemTitle: {
    textTransform: 'capitalize',
  },
}));

/**
 * Dialog for the given skill to select a feature page from a list.
 *
 * @param props - {@link ISKillSelectDialogProps}.
 */
const SKillSelectDialog: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();
  const { t }   = useTranslation();
  const history = useHistory();

  const careerContext    = React.useContext(CareerContext);
  const educationContext = React.useContext(EducationContext);
  const leisureContext   = React.useContext(LeisureContext);
  if (careerContext == null || educationContext == null || leisureContext == null) throw new Error('Context uninitialized');

  const handleBack = () => {
    history.goBack();
  };

  const handleClose = () => {
    history.push('/home');
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
          <ListItem key={`career-${education.title}`} button dense component={Link} to={`/home?d=career&id=${education.id}`}>
            <ListItemText primary={t(`career:${education.title}`)} className={classes.skillItemTitle} />
          </ListItem>
        );
      }

      categories.push(
        <React.Fragment key='careers'>
          <H variant='h3' className={classes.categoryHeading}>{t('career:heading')}</H>
          <List>
            {careers}
          </List>
        </React.Fragment>
      );
    }

    const smForEducations = skillMappings.filter(sm => sm.type === 'education' && sm.skillId === skill.id);
    if (smForEducations.length > 0) {
      const educations: Array<React.ReactNode> = [];
      for (let index = 0; index < smForEducations.length; ++index) {
        const education = educationContext.getEducation(smForEducations[index].typeId);
        if (education == null) continue;
        educations.push(
          <ListItem key={`education-${education.title}`} button dense component={Link} to={`/home?d=education&id=${education.id}`}>
            <ListItemText primary={t(`education:${education.title}`)} className={classes.skillItemTitle} />
          </ListItem>
        );
      }

      categories.push(
        <React.Fragment key='educations'>
          <H variant='h3' className={classes.categoryHeading}>{t('education:heading')}</H>
          <List>
            {educations}
          </List>
        </React.Fragment>
      );
    }

    const smForLeisures = skillMappings.filter(sm => sm.type === 'leisure' && sm.skillId === skill.id);
    if (smForLeisures.length > 0) {
      const leisures: Array<React.ReactNode> = [];
      for (let index = 0; index < smForLeisures.length; ++index) {
        const leisure = leisureContext.getLeisure(smForLeisures[index].typeId);
        if (leisure == null) continue;
        leisures.push(
          <ListItem key={`leisure-${leisure.title}`} button dense component={Link} to={`/home?d=leisure&id=${leisure.id}`}>
            <ListItemText primary={t(`leisure:${leisure.title}`)} />
          </ListItem>
        );
      }

      categories.push(
        <React.Fragment key='leisures'>
          <H variant='h3' className={classes.categoryHeading}>{t('leisure:heading')}</H>
          <List>
            {leisures}
          </List>
        </React.Fragment>
      );
    }
  }

  return (
    <Dialog title={`${t('skill:skill')}: ${skill != null ? t(`skill:${skill.title}`) : ''}`} isOpen={skill != null} onBack={handleBack} onClose={handleClose}>
      {categories}
    </Dialog>
  );
};

export default withTranslation()(SKillSelectDialog);
