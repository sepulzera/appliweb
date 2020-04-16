import * as React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';

const AppBar: React.FC<{}> = props => (
  <MuiAppBar
      position='static'>
    {props.children}
  </MuiAppBar>
);

export default AppBar;
