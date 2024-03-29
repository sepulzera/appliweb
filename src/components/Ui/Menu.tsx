import MuiMenu from '@mui/material/Menu';

import { AnyComponent } from '../../types/Types';

/**
 * {@link Menu}
 */
interface IMenuProps {
  /** Id required for accessibility and stuff. */
  id:       string;
  /** A HTML element, or a function that returns it. It's used to set the position of the menu. */
  anchorEl: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  /** Is the menu open? */
  isOpen:   boolean;
  /** Callback fired on closing the menu. */
  onClose:  () => void;
  /** {@link MenuItem}s. */
  children: AnyComponent;
}

/**
 * Renders a menu.
 *
 * @param props - {@link IMenuProps}.
 */
const Menu: React.FC<IMenuProps> = ({ isOpen, children, ...rest }: IMenuProps) => (
  <MuiMenu
      open = {isOpen}

      keepMounted

      anchorOrigin   = {{ vertical: 'top', horizontal: 'right' }}
      transformOrigin= {{ vertical: 'top', horizontal: 'right' }}

      {...rest}>
    {children}
  </MuiMenu>
);

export default Menu;
