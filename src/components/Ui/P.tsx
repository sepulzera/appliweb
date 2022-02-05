import { cx } from '@emotion/css';
import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';

import { AnyComponent } from '../../types/Types';

/**
 * {@link P} Props.
 */
interface IPProps {
  /** Classes used for styling. */
  className?: string | undefined;
  /** Render as different component, e. g. span. */
  component?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  /** Variant for this paragraph. */
  variant?:   'body1' | 'body2' | 'subtitle1' | 'subtitle2'; // button, caption, overline, srOnly
  /** Paragraph text, probably plain text. */
  children: AnyComponent;
}

const useStyles = makeStyles()(({
  p: {
    marginBottom: '1.5rem',
  },
}));

/**
 * Renders a paragraph.
 *
 * @param props - {@link IPProps}.
 */
const P: React.FC<IPProps> = (props: IPProps) => {
  const { classes } = useStyles();

  return (
    <Typography
        className={cx(classes.p, props.className)}
        component={props.component}
        variant={props.variant || 'body1'}>
      {props.children}
    </Typography>
  );
};

export default P;
