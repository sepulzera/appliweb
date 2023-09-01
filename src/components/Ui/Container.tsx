import { cx } from '@emotion/css';
import { makeStyles } from 'tss-react/mui';

import { AnyComponent } from '../../types/Types';

/**
 * {@link Container} Props.
 */
interface IContainerProps {
  /** Classes used for styling. */
  className?: string | undefined;
  /** Content of the container. */
  children: AnyComponent;
}

const useStyles = makeStyles()((theme => ({
  container: {
    width: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflowY: 'auto',
    overflowX: 'hidden',

    [theme.breakpoints.up('md')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '80rem',
    },
  },
})));

/**
 * Basic layout element, that centers the content horizontally with some nice background.
 *
 * @param props - {@link IContainerProps}.
 */
const Container: React.FC<IContainerProps> = ({ className, children, ...rest }: IContainerProps) => {
  const { classes } = useStyles();
  return (
    <div className={cx(classes.container, className)} {...rest}>
      {children}
    </div>
  );
};

export default Container;
