import { cx } from '@emotion/css';
import { makeStyles } from 'tss-react/mui';

// import { AnyComponent } from '../../types/Types';

/** {@link Timeline} Props. */
export interface ITimelineProps {
  /** Classes used for styling. */
  className?: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children:   any;
}

const useStyles = makeStyles()(({
  timeline: {
    marginTop: '2.4rem',
    '& >h3:first-of-type': {
      marginTop: 0,
    },
  },
}));

/**
 * Timeline.
 *
 * @param props - {@link ITimelineProps}.
 */
const Timeline: React.FC<ITimelineProps> = ({ className, children, ...rest }: ITimelineProps) => {
  const { classes } = useStyles();

  return (
    <div className={cx(classes.timeline, className)} {...rest}>
      {children}
    </div>
  );
};

export default Timeline;
