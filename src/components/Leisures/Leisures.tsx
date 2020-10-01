import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

import LeisureRecord from '../../context/LeisureContext/LeisureRecord';
import CapsHeading from '../Heading/CapsHeading';
import List from '../Ui/List';
import ListItem from '../Ui/ListItem';
import FeaturePage, { IFeaturePageProps } from '../FeaturePage/FeaturePage';
import Button from '../Ui/Button';
import Components from './ComponentRenderer';

/**
 * {@link Leisures} Props.
 */
interface ILeisuresProps extends WithTranslation {
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

  const [openPage, setOpenPage] = React.useState<string | undefined>(undefined);

  const handleOpen = (id: string) => {
    setOpenPage(id);
  };

  const handleClose = () => {
    setOpenPage(undefined);
  };

  const leisureList = props.leisures.map(leisure => (
    <ListItem>
      <Button id={leisure.title} className={classes.listButton} onClick={handleOpen}>{t(leisure.title)}</Button>
    </ListItem>
  ));

  const featurePages: Array<React.ReactElement<IFeaturePageProps>> = [];

  let index: number, leisure: LeisureRecord;
  for (index = 0; index < props.leisures.length; ++index) {
    leisure = props.leisures[index];
    featurePages.push(
      <FeaturePage
          title  = {leisure.title}
          image  = {leisure.image}

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
