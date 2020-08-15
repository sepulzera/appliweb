import * as React from 'react';
import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import { AnyComponent } from '../../types/Types';

/** {@link Dialog} Props. */
export interface IDialogProps {
  /** Title/Heading. */
  title: string;
  /** Is dialog open? */
  isOpen: boolean;
  /** Callback for click. */
  onClose?: () => void;
  /** Heading text. */
  children:   AnyComponent;
}

/**
 * Renders an dialog.
 *
 * @param props - {@link IDialogProps}.
 */
const Dialog: React.FC<IDialogProps> = (props: IDialogProps) => (
  <MuiDialog open={props.isOpen} onClose={props.onClose}>
    <MuiDialogTitle>{props.title}</MuiDialogTitle>
    {props.children}
  </MuiDialog>
);

export default Dialog;
