import { makeStyles } from 'tss-react/mui';
import MuiAppBar from '@mui/material/AppBar';
import { Toolbar, Container } from '@mui/material';

/**
 * {@link AppBar} Props.
 */
interface IAppBarProps {
  /** Content of the AppBar, probably some kind of heading. */
  children: React.ReactElement[];
}

const useStyles = makeStyles()((theme => ({
  toolbar: {
    marginLeft:  'auto',
    marginRight: 'auto',
  },
  container: {
    [theme.breakpoints.down('lg')]: {
      width: '100vw',
    },
    [theme.breakpoints.up('md')]: {
      width: `calc(80rem - ${theme.spacing(4)})`,
      maxWidth: `calc(100vw - ${theme.spacing(8)})`,
    },
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
})));

/**
 * Displays information relating to the current site.
 *
 * @param props - {@link IAppBarProps}.
 */
const AppBar: React.FC<IAppBarProps> = (props: IAppBarProps) => {
  const { classes } = useStyles();

  return (
    <MuiAppBar
        position='static'>
      <Toolbar disableGutters className={classes.toolbar}>
        <Container className={classes.container}>
          {props.children}
        </Container>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
