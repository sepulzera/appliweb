import { cx } from '@emotion/css';
import { makeStyles } from 'tss-react/mui';

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

const useStyles = makeStyles()((theme => ({
  noMarks: {
    paddingLeft: 0,

    '& li': {
      display: 'block',
    },
  },
  withMarks: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(2),
    },
  },
})));

/**
 * Renders a styled list.
 *
 * @param props - {@link IListProps}.
 */
const List: React.FC<IListProps> = ({ noMarks, className, children, ...rest }: IListProps) => {
  const { classes } = useStyles();

  return (
    <ul
        className = {cx(className, {
            [classes.noMarks]:   noMarks ?? false,
            [classes.withMarks]: !noMarks,
        })}
        {...rest}>
      {children}
    </ul>
  );
};

export default List;
