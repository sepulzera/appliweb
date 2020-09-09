import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { IListItemProps } from './ListItem';

const useStyles = makeStyles({
  noMarks: {
    paddingLeft: 0,

    '& li': {
      display: 'block',
    },
  },
});

/**
 * {@link List} Props.
 */
interface IListProps {
  /** Show no quotation marks. */
  noMarks?: boolean | undefined;

  /** List of {@link ListItem}. */
  children: React.ReactElement<IListItemProps> | Array<React.ReactElement<IListItemProps>>;
}

/**
 * Renders a styled list.
 *
 * @param props - {@link IListProps}.
 */
const List: React.FC<IListProps> = (props: IListProps) => {
  const classes = useStyles();

  return (
    <ul className={clsx({ [classes.noMarks]: props.noMarks ?? false })}>
      {props.children}
    </ul>
  );
};

export default List;
