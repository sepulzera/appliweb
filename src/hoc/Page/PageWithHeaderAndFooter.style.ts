import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  container: {
    flex: '1 1 1px',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
}));

export default useStyles;
