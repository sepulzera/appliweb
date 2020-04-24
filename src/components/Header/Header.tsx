import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '../Ui/AppBar';
import H from '../Ui/H';

const useStyles = makeStyles({
  title: {
    width:    '1280px', // magic number: max width of the page container
    maxWidth: '100vw',
    paddingLeft: '2rem',
  },
});

/**
 * {@link Header} Props.
 */
interface IHeaderProps {
  /** Site title to display. */
  title: string;
}

/**
 * Default header for this app, used by all sub-pages.
 *
 * @param props - {@link IHeaderProps}.
 */
const Header: React.FC<IHeaderProps> = props => {
  const classes = useStyles();

  return (
    <AppBar>
      <H variant='h1' className={classes.title}>{props.title}</H>
    </AppBar>
  );
};

export default Header;
