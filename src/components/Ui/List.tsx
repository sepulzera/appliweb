import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { IListItemProps } from './ListItem';

/**
 * {@link List} Props.
 */
interface IListProps {
  /** Show no quotation marks. */
  noMarks?: boolean | undefined;

  /** Classes used for styling. */
  className?: string | undefined;

  /** List of {@link ListItem}. */
  children: React.ReactElement<IListItemProps> | Array<React.ReactElement<IListItemProps>>;
}

const useStyles = makeStyles(theme => ({
  noMarks: {
    paddingLeft: 0,

    '& li': {
      display: 'block',
    },
  },
  withMarks: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

/**
 * Renders a styled list.
 *
 * @param props - {@link IListProps}.
 */
const List: React.FC<IListProps> = (props: IListProps) => {
  const classes = useStyles();

  return (
    <ul
        className = {clsx(props.className, {
            [classes.noMarks]: props.noMarks ?? false,
            [classes.withMarks]: !props.noMarks,
        })}>
      {props.children}
    </ul>
  );
};

export default List;
