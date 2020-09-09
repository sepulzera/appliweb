import * as React from 'react';
import { useTranslation, withTranslation, WithTranslation } from 'react-i18next';

import LeisureRecord from '../../context/LeisureContext/LeisureRecord';
import CapsHeading from '../Heading/CapsHeading';
import List from '../Ui/List';
import ListItem from '../Ui/ListItem';

/**
 * {@link Leisures} Props.
 */
interface ILeisuresProps extends WithTranslation {
  /** Leisures to display. */
  leisures: Array<LeisureRecord>;
}

/**
 * Leisures.
 *
 * @param props - {@link ILeisuresProps}.
 */
const Leisures: React.FC<ILeisuresProps> = (props: ILeisuresProps) => {
  const { t } = useTranslation();

  const leisureList = props.leisures.map(leisure => <ListItem>{t(leisure.title)}</ListItem>);

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
