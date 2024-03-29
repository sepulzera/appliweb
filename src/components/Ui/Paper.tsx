import { makeStyles } from 'tss-react/mui';
import MuiPaper from '@mui/material/Paper';

import { AnyComponent } from '../../types/Types';

/**
 * {@link Paper} Props.
 */
interface IPaperProps {
  /** Content of the paper. */
  children: AnyComponent;
}

const useStyles = makeStyles()(({
  paper: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,

    padding: '1rem',
    marginBottom: '2rem',
    '& >*:first-child': {
      marginTop: 0,
    },
  },
}));

/**
 * Renders a digital paper to place content on.
 *
 * You probably want to use this to display your pages content.
 *
 * @param props - {@link IPaperProps}.
 */
const Paper: React.FC<IPaperProps> = ({ children, ...rest }: IPaperProps) => {
  const { classes } = useStyles();
  return (
    <MuiPaper className={classes.paper} {...rest}>
      {children}
    </MuiPaper>
  );
};

export default Paper;
