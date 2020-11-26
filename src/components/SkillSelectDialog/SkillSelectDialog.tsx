import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

import SkillRecord from '../../context/SkillContext/SkillRecord';
import ExperienceRecord from '../../context/Experience/ExperienceRecord';
import SkillMappingRecord from '../../context/SkillMappingContext/SkillMappingRecord';
import LeisureContext from '../../context/LeisureContext/LeisureContext';

import Dialog from '../Ui/Dialog';
import H from '../Ui/H';
import EducationContext from '../../context/EducationContext /EducationContext';

/**
 * {@link ISKillSelectDialogProps} Props.
 */
export interface ISKillSelectDialogProps {
  /** The selected skill. Leave undefined to not show. */
  skill: SkillRecord | undefined;
  skillMappings: Array<SkillMappingRecord>;
  onSelect: (record: ExperienceRecord) => void;
  /** Callback for click. */
  onClose:  () => void;
}

type IProps = ISKillSelectDialogProps & WithTranslation;

const useStyles = makeStyles(theme => ({
  categoryHeading: {
    marginTop:    theme.spacing(2),
    marginBottom: 0,
    marginLeft:   theme.spacing(2),
  },
}));

/**
 * Dialog for the given skill to select a feature page from a list.
 *
 * @param props - {@link ISKillSelectDialogProps}.
 */
const SKillSelectDialog: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const educationContext = React.useContext(EducationContext);
  const leisureContext   = React.useContext(LeisureContext);
  if (educationContext == null || leisureContext == null) throw new Error('Context unitialized');

  const { skill, skillMappings, onClose } = props;

  const categories: Array<React.ReactNode> = [];

  if (skill != null) {
    const smForEducations = skillMappings.filter(sm => sm.type === 'education' && sm.skillId === skill.id);
    if (smForEducations.length > 0) {
      const educations: Array<React.ReactNode> = [];
      for (let index = 0; index < smForEducations.length; ++index) {
        const education = educationContext.getEducation(smForEducations[index].typeId);
        if (education == null) continue;
        educations.push(
          <ListItem key={`education-${education.title}`} button dense onClick={() => props.onSelect(education)}>
            <ListItemText primary={t(`education:${education.title}`)} />
          </ListItem>
        );
      }

      categories.push(
        <React.Fragment key='educations'>
          <H variant='h3' className={classes.categoryHeading}>{t('education:heading')}</H>
          <List key='educations'>
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
          <ListItem key={`leisure-${leisure.title}`} button dense onClick={() => props.onSelect(leisure)}>
            <ListItemText primary={t(`leisure:${leisure.title}`)} />
          </ListItem>
        );
      }

      categories.push(
        <React.Fragment key='leisures'>
          <H variant='h3' className={classes.categoryHeading}>{t('leisure:heading')}</H>
          <List key='leisures'>
            {leisures}
          </List>
        </React.Fragment>
      );
    }
  }

  return (
    <Dialog title={`${t('skill:skill')}: ${skill != null ? t(`skill:${skill.title}`) : ''}`} isOpen={skill != null} onClose={onClose}>
      {categories}
    </Dialog>
  );
};

export default withTranslation()(SKillSelectDialog);
