import * as React from 'react';

import { IListItemProps } from './ListItem';

/**
 * {@link List} Props.
 */
interface IListProps {
  /** List of {@link ListItem}. */
  children: React.ReactElement<IListItemProps> | Array<React.ReactElement<IListItemProps>>;
}

/**
 * Renders a styled list.
 *
 * @param props - {@link IListProps}.
 */
const List: React.FC<IListProps> = (props: IListProps) => (
  <ul>
    {props.children}
  </ul>
);

export default List;
