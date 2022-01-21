import Typography from '@material-ui/core/Typography';

import { AnyComponent } from '../../types/Types';

/**
 * {@link P} Props.
 */
interface IPProps {
  /** Classes used for styling. */
  className?: string | undefined;
  /** Render as different component, e. g. span. */
  component?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  /** Variant for this paragraph. */
  variant?:   'body1' | 'body2' | 'subtitle1' | 'subtitle2'; // button, caption, overline, srOnly
  /** Paragraph text, probably plain text. */
  children: AnyComponent;
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
