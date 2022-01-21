import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

// import { AnyComponent } from '../../types/Types';

/** {@link Timeline} Props. */
export interface ITimelineProps {
  /** Classes used for styling. */
  className?: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children:   any;
}

const useStyles = makeStyles({
  timeline: {
    marginTop: '2.4rem',
    '& >h3:first-child': {
      marginTop: 0,
    },
  },
});

/**
 * Renders a heading (h1 .. h6).
 *
 * @param props - {@link ITimelineProps}.
 */
const Timeline: React.FC<ITimelineProps> = (props: ITimelineProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.timeline, props.className)}>
      {props.children}
    </div>
  );
};

export default Timeline;
