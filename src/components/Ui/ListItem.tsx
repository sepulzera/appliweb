import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IListItemProps {

}

const ListItem: React.FC<IListItemProps> = props => (
  <li>
    {props.children}
  </li>
);

export default ListItem;
