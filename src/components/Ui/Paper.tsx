import * as React from 'react';
import MuiPaper from '@material-ui/core/Paper';

const Paper: React.FC<{}> = props => (
  <MuiPaper>
    {props.children}
  </MuiPaper>
);

export default Paper;
