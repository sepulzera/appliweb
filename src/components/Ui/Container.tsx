import * as React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import MuiContainer from '@material-ui/core/Container';

const useStyles = makeStyles({
  container: {
    flex: '1 1 1px',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
});

/**
 * {@link Container} Props.
 */
interface IContainerProps {
  /** Classes used for styling. */
  className?: any;
  /** Content of the container. */
  children: React.ReactNode;
}

/**
 * Basic layout element, that centers the content horizontally with some nice background.
 *
 * @param props - {@link IContainerProps}.
 */
const Container: React.FC<IContainerProps> = (props: IContainerProps) => {
  const classes = useStyles();
  return (
    <MuiContainer className={clsx(classes.container, props.className)}>
      {props.children}
    </MuiContainer>
  );
};

export default Container;
