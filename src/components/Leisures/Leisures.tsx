import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

import SkillContext from '../../context/SkillContext/SkillContext';
import SkillMappingContext from '../../context/SkillMappingContext/SkillMappingContext';

import LeisureRecord from '../../context/LeisureContext/LeisureRecord';
import CapsHeading from '../Heading/CapsHeading';
import List from '../Ui/List';
import ListItem from '../Ui/ListItem';
import FeaturePage, { IFeaturePageProps } from '../FeaturePage/FeaturePage';
import Button from '../Ui/Button';
import Components from './ComponentRenderer';
import SkillRecord from '../../context/SkillContext/SkillRecord';

/**
 * {@link Leisures} Props.
 */
interface ILeisuresProps extends WithTranslation {
  userId: number;
  /** Leisures to display. */
  leisures: Array<LeisureRecord>;
}

const useStyles = makeStyles({
  listButton: {
    textAlign: 'left',
  },
});

/**
 * Leisures.
 *
 * @param props - {@link ILeisuresProps}.
 */
const Leisures: React.FC<ILeisuresProps> = (props: ILeisuresProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const skillContext = React.useContext(SkillContext);
  const skillMappingContext = React.useContext(SkillMappingContext);

  const [openPage, setOpenPage] = React.useState<string | undefined>(undefined);

  const handleOpen = (id: string) => {
    setOpenPage(id);
  };

  const handleClose = () => {
    setOpenPage(undefined);
  };

  if (skillContext == null || skillMappingContext == null) throw new Error('Context unitialized');

  const leisureList = props.leisures.map(leisure => (
    <ListItem key={`leisures-btn-${leisure.id}`}>
      <Button id={leisure.title} className={classes.listButton} onClick={handleOpen}>{t(leisure.title)}</Button>
    </ListItem>
  ));

  const featurePages: Array<React.ReactElement<IFeaturePageProps>> = [];

  let index: number, leisure: LeisureRecord;
  for (index = 0; index < props.leisures.length; ++index) {
    leisure = props.leisures[index];

    const skillMappings = skillMappingContext.getSkillMappingsByUserAndType(props.userId, 'leisure', leisure.id);
    const skills = skillMappings.map(sm => skillContext.getSkill(sm.skillId)).filter(skill => skill != null) as Array<SkillRecord>;

    featurePages.push(
      <FeaturePage
          key    = {`featurePage-${leisure.id}`}
          title  = {leisure.title}
          image  = {leisure.image}
          skills = {skills}

          isOpen  = {openPage === leisure.title}
          onClose = {handleClose}>
        {/* TODO i18n */}
        {leisure.feature.map(block => Components(block))}
      </FeaturePage>
    );
  }

  return (
    <>
      <CapsHeading>{t('leisure:heading')}</CapsHeading>
      <List noMarks>
        {leisureList}
      </List>

      {featurePages}
    </>
  );
};

export default withTranslation()(Leisures);
