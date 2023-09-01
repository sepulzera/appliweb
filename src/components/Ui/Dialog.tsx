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

const DialogTitle: React.FC<IDialogTitleProps> = ({
    onBack, onClose, children, ...rest }: IDialogTitleProps) => {
  const { classes } = useStyles();

  return (
    <MuiDialogTitle className={classes.dialog} {...rest}>
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
const Dialog: React.FC<IDialogProps> = ({
  title, isOpen, onBack, onClose, children, ...rest }: IDialogProps) => (
    <MuiDialog maxWidth='lg' open={isOpen} onClose={onClose} {...rest}>
      <DialogTitle onBack={onBack} onClose={onClose}>{title}</DialogTitle>
      <MuiDialogContent>
        {children}
      </MuiDialogContent>
    </MuiDialog>
);

export default Dialog;
