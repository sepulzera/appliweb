import * as React from 'react';

import LeisureRecord from '../../context/LeisureContext/LeisureRecord';

/**
 * {@link Leisures} Props.
 */
interface ILeisuresProps {
  /** Leisures to display. */
  leisures: Array<LeisureRecord>;
}

/**
 * Leisures.
 *
 * @param props - {@link ILeisuresProps}.
 */
const Leisures: React.FC<ILeisuresProps> = (props: ILeisuresProps) => {
  const leisureList = props.leisures.map(leisure => <li>{leisure.title}</li>);

  return (
    <ul>
      {leisureList}
    </ul>
  );
};

export default Leisures;
