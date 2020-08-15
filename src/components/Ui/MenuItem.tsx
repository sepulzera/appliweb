import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiMenuItem from '@material-ui/core/MenuItem';

import { AnyComponent } from '../../types/Types';

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize:    '1rem',
    lineHeight:  0,
    marginRight: theme.spacing(2),
  },
}));

/**
 * {@link MenuItem} Props.
 */
interface IMenuItemProps {
  icon: any;
  /** Callback fired on clicking the item. */
  onClick:  () => void;
  /** Item's text. */
  children: AnyComponent;
}

/**
 * Renders a menu item.
 *
 * @param props - {@link IMenuItemProps}.
 */
const MenuItem: React.FC<IMenuItemProps> = (props: IMenuItemProps) => {
  const classes = useStyles();

  return (
    <MuiMenuItem
        onClick = {props.onClick}>
      <>
        <span className={classes.icon}>
          {props.icon}
        </span>
        {props.children}
      </>
    </MuiMenuItem>
  );
};

export default MenuItem;
