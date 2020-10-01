import * as React from 'react';

import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import { AnyComponent } from '../../types/Types';
import H from './H';
import IconButton from './IconButton';

/** {@link Dialog} Props. */
export interface IDialogProps {
  /** Title/Heading. */
  title: string;
  /** Is dialog open? */
  isOpen: boolean;
  /** Callback for click. */
  onClose?: () => void;
  /** Dialog content. */
  children:   AnyComponent;
}

/** {@link DialogTitle} Props. */
interface IDialogTitleProps {
  /** Callback for click. */
  onClose?: () => void;
  /** DialogTitle content. */
  children:   AnyComponent;
}

const useStyles = makeStyles(theme => ({
  root: {
    paddingRight:  theme.spacing(2),
    paddingTop:    theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  closeButton: {
    position: 'absolute',
    right:    theme.spacing(0),
    top:      theme.spacing(0),
  },
}));

const DialogTitle: React.FC<IDialogTitleProps> = (props: IDialogTitleProps) => {
  const classes = useStyles();

  const { children, onClose } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <H variant='h6'>{children}</H>
      {onClose ? (
        <IconButton aria-label='close' className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
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
    <DialogTitle onClose={props.onClose}>{props.title}</DialogTitle>
    {props.children}
  </MuiDialog>
);

export default Dialog;
