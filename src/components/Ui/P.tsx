import * as React from 'react';
import Typography from '@material-ui/core/Typography';

/**
 * {@link P} Props.
 */
interface IPProps {
  /** Classes used for styling. */
  className?: string | undefined;
  /** Render as different component, e. g. span. */
  component?: any;
  /** Variant for this paragraph. */
  variant?:   'body1' | 'body2' | 'subtitle1' | 'subtitle2'; // button, caption, overline, srOnly
  /** Paragraph text, probably plain text. */
  children: React.ReactNode;
}

/**
 * Renders a paragraph.
 *
 * @param props - {@link IPProps}.
 */
const P: React.FC<IPProps> = (props: IPProps) => (
  <Typography
      className={props.className}
      component={props.component}
      variant={props.variant || 'body1'}>
    {props.children}
  </Typography>
);

export default P;
