import { makeStyles } from 'tss-react/mui';
import MuiMenuItem from '@mui/material/MenuItem';
import { IconProps } from '@mui/material';

import { AnyComponent } from '../../types/Types';

/**
 * {@link MenuItem}
 */
interface IMenuItemProps {
  icon: IconProps;
  /** Callback fired on clicking the item. */
  onClick:  () => void;
  /** Item's text. */
  children: AnyComponent;
}

const useStyles = makeStyles()((theme => ({
  icon: {
    fontSize:    '1rem',
    lineHeight:  0,
    marginRight: theme.spacing(2),
  },
})));

/**
 * Renders a menu item.
 *
 * @param props - {@link IMenuItemProps}.
 */
const MenuItem: React.FC<IMenuItemProps> = ({ icon, children, ...rest }: IMenuItemProps) => {
  const { classes } = useStyles();

  return (
    <MuiMenuItem
        {...rest}>
      <>
        <span className={classes.icon}>
          {icon}
        </span>
        {children}
      </>
    </MuiMenuItem>
  );
};

export default MenuItem;
