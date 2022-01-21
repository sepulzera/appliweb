import MuiButton from '@material-ui/core/Button';

import { AnyComponent } from '../../types/Types';

/**
 * {@link Button} Props.
 */
interface IButtonProps {
  /** If true, the button will stretch to the available space. */
  fullWidth?: boolean;

  /** Callback when fired. */
  onClick?: () => void;

  /** Optionally as Link. */
  component?: any | undefined; // eslint-disable-line @typescript-eslint/no-explicit-any
  /** Required if component = Link. */
  to?: string | undefined;

  /** Classes used for styling. */
  className?: string | undefined;
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

      onClick   = {props.onClick}

      component = {props.component}
      to        = {props.to}

      className = {props.className}>
    {props.children}
  </MuiButton>
);

export default Button;
