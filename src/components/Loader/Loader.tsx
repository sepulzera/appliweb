import { makeStyles } from 'tss-react/mui';

import { CircularProgress } from '@mui/material';

const useStyles = makeStyles()(({
  screenCenter: {
    height:         '100vh',
    display:        'flex',
    justifyContent: 'center',
    alignItems:     'center',

    color: '#e47200',
  },
}));

/**
 * Rendered while the app is starting.
 */
const Loader: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.screenCenter}>
      <CircularProgress size='5rem' color='inherit' />
    </div>
  );
};

export default Loader;
