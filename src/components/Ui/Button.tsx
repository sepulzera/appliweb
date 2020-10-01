import * as React from 'react';
import MuiButton from '@material-ui/core/Button';

import { AnyComponent } from '../../types/Types';

/**
 * {@link Button} Props.
 */
interface IButtonProps {
  /** Unique identifier. */
  id: string;
  /** Classes used for styling. */
  className?: string | undefined;
  onClick: (id: string) => void;
  /** Prompt for the link. Probably plain text. */
  children: AnyComponent;
}

/**
 * Renders an anchor element.
 *
 * @param props - {@link IButtonProps}.
 */
const Button: React.FC<IButtonProps> = (props: IButtonProps) => (
  <MuiButton
      className={props.className}
      onClick = {() => props.onClick(props.id)}>
    {props.children}
  </MuiButton>
);

export default Button;
