import * as React from 'react';
import clsx from 'clsx';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme: Theme) => createStyles({
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
}));

/**
 * Basic layout element, that centers the content horizontally with some nice background.
 *
 * @param props - {@link IContainerProps}.
 */
const Container: React.FC<IContainerProps> = (props: IContainerProps) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.container, props.className)}>
      {props.children}
    </div>
  );
};

export default Container;
