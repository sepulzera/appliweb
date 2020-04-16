import * as React from 'react';
import Typography from '@material-ui/core/Typography';

interface IPProps {
  variant?:   'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'h5' | 'h6'; // button, caption, overline, srOnly
  className?: any;
}

const P: React.FC<IPProps> = props => (
  <Typography variant={props.variant || 'body1'} className={props.className}>
    {props.children}
  </Typography>
);

export default P;
