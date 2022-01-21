import MuiDialog from '@mui/material/Dialog';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { ArrowBackOutlined } from '@mui/icons-material';
import { makeStyles } from 'tss-react/mui';

import { AnyComponent } from '../../types/Types';
import H from './H';
import IconButton from './IconButton';

/** {@link Dialog} Props. */
export interface IDialogProps {
  /** Title/Heading. */
  title: string;
  /** Is dialog open? */
  isOpen: boolean;
  /** Callback for back. */
  onBack?: () => void;
  /** Callback for click. */
  onClose?: () => void;
  /** Dialog content. */
  children:   AnyComponent;
}

/** {@link DialogTitle} Props. */
interface IDialogTitleProps {
  /** Callback on back. */
  onBack?: () => void;
  /** Callback for click. */
  onClose?: () => void;
  /** DialogTitle content. */
  children:   AnyComponent;
}

const useStyles = makeStyles()((theme => ({
  dialog: {
    display: 'flex',
    padding: 0,
    margin:  0,

    '& .MuiTypography-body1': {
      marginBottom: '1.5rem',
    },
  },
  dialogTitle: {
    flex: 1,
    paddingLeft:   theme.spacing(2),
    paddingRight:  theme.spacing(2),
    paddingTop:    theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  dialogButton: {
    borderRadius:  0,
    color: theme.palette.primary.contrastText,
  },
})));

const DialogTitle: React.FC<IDialogTitleProps> = (props: IDialogTitleProps) => {
  const { classes } = useStyles();

  const { children, onBack, onClose } = props;

  return (
    <MuiDialogTitle className={classes.dialog}>
      {onBack && (
        <IconButton aria-label='back' className={classes.dialogButton} onClick={onBack}>
          <ArrowBackOutlined />
        </IconButton>
      )}
      <H variant='h6' component='span' className={classes.dialogTitle}>{children}</H>
      {onClose && (
        <IconButton aria-label='close' className={classes.dialogButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
};

/**
 * Renders an dialog.
 *
 * @param props - {@link IDialogProps}.
 */
const Dialog: React.FC<IDialogProps> = (props: IDialogProps) => (
  <MuiDialog maxWidth='lg' open={props.isOpen} onClose={props.onClose}>
    <DialogTitle onBack={props.onBack} onClose={props.onClose}>{props.title}</DialogTitle>
    <MuiDialogContent>
      {props.children}
    </MuiDialogContent>
  </MuiDialog>
);

export default Dialog;
