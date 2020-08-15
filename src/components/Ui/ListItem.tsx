import * as React from 'react';

import { AnyComponent } from '../../types/Types';

/**
 * {@link ListItem} Props.
 */
export interface IListItemProps {
  /** Text to render. */
  children: AnyComponent;
}

/**
 * Renders a styled list item.
 *
 * @param props - {@link IListItemProps}.
 */
const ListItem: React.FC<IListItemProps> = (props: IListItemProps) => (
  <li>
    {props.children}
  </li>
);

export default ListItem;
