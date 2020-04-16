import * as React from 'react';
import Typography from '@material-ui/core/Typography';

interface IHProps {
  className?: any;
  component?: any;
  variant:    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const H: React.FC<IHProps> = props => (
  <Typography
      className = {props.className}
      component = {props.component}
      variant   = {props.variant}>
    {props.children}
  </Typography>
);

export default H;
