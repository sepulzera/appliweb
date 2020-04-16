import * as React from 'react';
import MuiLink from '@material-ui/core/Link';

interface ILinkProps {
  href:    string;
  target?: string;
}

const Link: React.FC<ILinkProps> = props => (
  <MuiLink
      href   = {props.href}
      target = {props.target}
      rel    = {props.target === '_blank' ? 'noopener' : undefined}>
    {props.children}
  </MuiLink>
);

export default Link;
