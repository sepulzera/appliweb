import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { makeStyles } from 'tss-react/mui';

import LeisureRecord from '../../context/LeisureContext/LeisureRecord';
import CapsHeading from '../Heading/CapsHeading';
import List from '../Ui/List';
import ListItem from '../Ui/ListItem';
import Button from '../Ui/Button';

/**
 * {@link Leisures} Props.
 */
interface ILeisuresProps {
  /** Leisures to display. */
  leisures: Array<LeisureRecord>;
}

const useStyles = makeStyles()((theme => ({
  listButton: {
    textAlign: 'left',
    justifyContent: 'left',
  },
  skillsList: {
    marginRight: theme.spacing(1),
  },
})));

/**
 * Leisures.
 *
 * @param props - {@link ILeisuresProps}.
 */
const Leisures: React.FC<ILeisuresProps> = ({ leisures }: ILeisuresProps) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const leisureList = leisures.map(leisure => (
    <ListItem key={`leisures-btn-${leisure.id}`}>
      <Button fullWidth className={classes.listButton} component={Link} to={`${process.env.PUBLIC_URL}/home?d=leisure&id=${leisure.id}`}>{t(`leisure:${leisure.title}`)}</Button>
    </ListItem>
  ));

  return (
    <>
      <CapsHeading>{t('leisure:heading')}</CapsHeading>
      <List noMarks className={classes.skillsList}>
        {leisureList}
      </List>
    </>
  );
};

export default Leisures;
