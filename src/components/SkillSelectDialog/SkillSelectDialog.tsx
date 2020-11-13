import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import { List, ListItem, ListItemText } from '@material-ui/core';

import SkillRecord from '../../context/SkillContext/SkillRecord';
import ExperienceRecord from '../../context/Experience/ExperienceRecord';
import SkillMappingRecord from '../../context/SkillMappingContext/SkillMappingRecord';
import LeisureContext from '../../context/LeisureContext/LeisureContext';

import Dialog from '../Ui/Dialog';

/**
 * {@link List} Props.
 */
export interface IFeaturePageProps {
  /** The selected skill. Leave undefined to not show. */
  skill: SkillRecord | undefined;
  skillMappings: Array<SkillMappingRecord>;
  onSelect: (record: ExperienceRecord) => void;
  /** Callback for click. */
  onClose:  () => void;
}
type IProps = IFeaturePageProps & WithTranslation;

/**
 * Renders a feature page.
 *
 * @param props - {@link IFeaturePageProps}.
 */
const FeatureSelectDialog: React.FC<IProps> = (props: IProps) => {
  const { t } = useTranslation();

  const leisureContext = React.useContext(LeisureContext);
  if (leisureContext == null) throw new Error('Context unitialized');

  const { skill, skillMappings, onClose } = props;

  const categories: Array<React.ReactNode> = [];

  if (skill != null) {
    const smForLeisures = skillMappings.filter(sm => sm.type === 'leisure' && sm.skillId === skill.id);
    if (smForLeisures.length > 0) {
      const leisures: Array<React.ReactNode> = [];
      for (let index = 0; index < smForLeisures.length; ++index) {
        const leisure = leisureContext.getLeisure(smForLeisures[index].typeId);
        if (leisure == null) continue;
        leisures.push(
          <ListItem key={`leisure-${leisure.title}`} button dense onClick={() => props.onSelect(leisure)}>
            <ListItemText primary={t(leisure.title)} />
          </ListItem>
        );
      }

      categories.push(
        <List key='leisures'>
          {leisures}
        </List>
      );
    }
  }

  return (
    <Dialog title={`${t('skill:skill')}: ${skill != null ? t(skill.title) : ''}`} isOpen={skill != null} onClose={onClose}>
      {categories}
    </Dialog>
  );
};

export default withTranslation()(FeatureSelectDialog);
