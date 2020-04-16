import * as React from 'react';

import { IListItemProps } from './ListItem';

interface IListProps {
  children: React.ReactElement<IListItemProps> | Array<React.ReactElement<IListItemProps>>;
}

const List: React.FC<IListProps> = props => (
  <ul>
    {props.children}
  </ul>
);

export default List;
