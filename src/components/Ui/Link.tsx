import * as React from 'react';
import MuiLink from '@material-ui/core/Link';

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
  children: React.ReactNode;
}

/**
 * Renders an anchor element.
 *
 * @param props - {@link ILinkProps}.
 */
const Link: React.FC<ILinkProps> = (props: ILinkProps) => (
  <MuiLink
      href   = {props.href}
      target = {props.target}
      rel    = {props.target === '_blank' ? 'noopener' : undefined}>
    {props.children}
  </MuiLink>
);

export default Link;
