import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '../Ui/AppBar';
import H from '../Ui/H';
import Settings from '../Settings/Settings';

const useStyles = makeStyles({
  title: {
    flex: 1,
    maxWidth: '100vw',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
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
      <Settings />
    </AppBar>
  );
};

export default Header;
