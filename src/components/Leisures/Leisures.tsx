import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';

import LeisureRecord from '../../context/LeisureContext/LeisureRecord';
import CapsHeading from '../Heading/CapsHeading';
import List from '../Ui/List';
import ListItem from '../Ui/ListItem';
import Button from '../Ui/Button';

/**
 * {@link Leisures} Props.
 */
interface ILeisuresProps extends WithTranslation {
  /** Leisures to display. */
  leisures: Array<LeisureRecord>;

  onLeisureClick: (leisure: LeisureRecord) => void;
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

  const leisureList = props.leisures.map(leisure => (
    <ListItem key={`leisures-btn-${leisure.id}`}>
      <Button id={leisure.title} className={classes.listButton} onClick={() => props.onLeisureClick(leisure)}>{t(leisure.title)}</Button>
    </ListItem>
  ));

  return (
    <>
      <CapsHeading>{t('leisure:heading')}</CapsHeading>
      <List noMarks>
        {leisureList}
      </List>
    </>
  );
};

export default withTranslation()(Leisures);
