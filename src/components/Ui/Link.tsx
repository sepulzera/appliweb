import MuiLink from '@mui/material/Link';

import { AnyComponent } from '../../types/Types';

/**
 * {@link Link} Props.
 */
interface ILinkProps {
  /** Location URL. */
  href:     string;
  /**
   * Where to open the linked document.
   *
   * Default: _blank.
   *
   * | Value   | Description                                      |
   * |---------|--------------------------------------------------|
   * | _blank  | Opens the linked document in a new window or tab |
   * | _self   | Opens the linked document in the same frame as it was clicked (this is default) |
   * | _parent | Opens the linked document in the parent frame    |
   * | _top    | Opens the linked document in the full body of the window |
   */
  target?:  '_blank' | '_self' | 'parent' | 'top' | undefined;
  /** Prompt for the link. Probably plain text. */
  children: AnyComponent;
}

/**
 * Renders an anchor element.
 *
 * @param props - {@link ILinkProps}.
 */
const Link: React.FC<ILinkProps> = ({ target, children, ...rest }: ILinkProps) => (
  <MuiLink
      target = {target}
      rel    = {target === '_blank' ? 'noopener' : undefined}
      {...rest}>
    {children}
  </MuiLink>
);

export default Link;
