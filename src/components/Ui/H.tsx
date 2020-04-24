import * as React from 'react';
import Typography from '@material-ui/core/Typography';

/** {@link H} Props. */
export interface IHProps {
  /** Classes used for styling. */
  className?: any;
  /** Render as different component, e. g. 'div' or 'h3'. */
  component?: any;
  /** Heading-level to use. */
  variant:    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Heading text. */
  children:   React.ReactNode;
}

/**
 * Renders a heading (h1 .. h6).
 *
 * @param props - {@link IHProps}.
 */
const H: React.FC<IHProps> = (props: IHProps) => (
  <Typography
      className = {props.className}
      component = {props.component}
      variant   = {props.variant}>
    {props.children}
  </Typography>
);

export default H;
