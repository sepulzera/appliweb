import * as React from 'react';
import MuiIconButton from '@material-ui/core/IconButton';

import { AnyComponent } from '../../types/Types';

/** {@link IconButton} Props. */
export interface IIconButtonProps {
  /** Font color of the button. */
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  /** Size of the button. Default: 'medium'. */
  size?: 'small' | 'medium';
  /** Callback for click. */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Heading text. */
  children:   AnyComponent;
}

/**
 * Renders an icon button.
 *
 * @param props - {@link IIconButtonProps}.
 */
const IconButton: React.FC<IIconButtonProps> = (props: IIconButtonProps) => (
  <MuiIconButton color={props.color} size={props.size} onClick={props.onClick}>
    {props.children}
  </MuiIconButton>
);

export default IconButton;
