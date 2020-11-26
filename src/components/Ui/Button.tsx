import * as React from 'react';
import MuiButton from '@material-ui/core/Button';

import { AnyComponent } from '../../types/Types';

/**
 * {@link Button} Props.
 */
interface IButtonProps {
  /** If true, the button will stretch to the available space. */
  fullWidth?: boolean;

  /** Classes used for styling. */
  className?: string | undefined;
  /** Callback when fired. */
  onClick: () => void;
  /** Prompt for the link. Probably plain text. */
  children: AnyComponent;
}

/**
 * Renders an button element.
 *
 * @param props - {@link IButtonProps}.
 */
const Button: React.FC<IButtonProps> = (props: IButtonProps) => (
  <MuiButton
      fullWidth = {props.fullWidth}
      className = {props.className}
      onClick   = {props.onClick}>
    {props.children}
  </MuiButton>
);

export default Button;
