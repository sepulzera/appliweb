import * as React from 'react';

import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import { AnyComponent } from '../../types/Types';
import H from './H';
import IconButton from './IconButton';
import { DialogContent } from '@material-ui/core';
import { ArrowBackOutlined } from '@material-ui/icons';

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

const useStyles = makeStyles(theme => ({
  dialog: {
    display: 'flex',
    padding: 0,
    margin:  0,
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
  },
}));

const DialogTitle: React.FC<IDialogTitleProps> = (props: IDialogTitleProps) => {
  const classes = useStyles();

  const { children, onBack, onClose } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.dialog}>
      {onBack && (
        <IconButton aria-label='back' className={classes.dialogButton} onClick={onBack}>
          <ArrowBackOutlined />
        </IconButton>
      )}
      <H variant='h6' className={classes.dialogTitle}>{children}</H>
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
    <DialogContent>
      {props.children}
    </DialogContent>
  </MuiDialog>
);

export default Dialog;
