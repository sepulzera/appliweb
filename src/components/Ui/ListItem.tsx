import * as React from 'react';

import { AnyComponent } from '../../types/Types';

/**
 * {@link ListItem} Props.
 */
export interface IListItemProps {
  /** Classname for styling. */
  className?: string;
  /** Text to render. */
  children: AnyComponent;
}

/**
 * Renders a styled list item.
 *
 * @param props - {@link IListItemProps}.
 */
const ListItem: React.FC<IListItemProps> = (props: IListItemProps) => (
  <li className={props.className}>
    {props.children}
  </li>
);

export default ListItem;
