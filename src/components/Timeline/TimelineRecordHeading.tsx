import { Link } from 'react-router-dom';

import { makeStyles } from 'tss-react/mui';

import { AnyComponent } from '../../types/Types';
import H from '../Ui/H';
import Button from '../Ui/Button';

/** {@link TimelineRecordHeading} Props. */
export interface ITimelineRecordHeadingProps {
  /** Link to dialog. */
  to: string;

  /** Heading text. */
  children:   AnyComponent;
}

const useStyles = makeStyles()((theme => ({
  timelineRecordHeading: {
    display:     'inline-block',
    marginLeft:  '-2.2rem',
    width:       'calc(100% + 2.2rem)',

    color: theme.palette.primary.main,
    letterSpacing: '2px',
    marginTop:     0,
    marginBottom:  0,
  },
  timelineDot: {
    lineHeight:  '1rem',
    fontSize:    '5rem',
    color: theme.palette.primary.main,
    marginRight: '0.7rem',
  },
  timelineRecordHeadingButton: {
    paddingLeft:    0,
    paddingRight:   0,

    justifyContent: 'start',
    textAlign:      'start',
  },
})));

/**
 * Heading for a {@link TimelineRecord}.
 *
 * @param props - {@link ITimelineRecordHeadingProps}.
 */
const TimelineRecordHeading: React.FC<ITimelineRecordHeadingProps> = ({ to, children, ...rest }: ITimelineRecordHeadingProps) => {
  const { classes } = useStyles();

  return (
    <H variant='h4' className={classes.timelineRecordHeading} {...rest}>
      <Button fullWidth className={classes.timelineRecordHeadingButton} component={Link} to={to}>
        <>
          <span className={classes.timelineDot}>·</span>
          {children}
        </>
      </Button>
    </H>
  );
};

export default TimelineRecordHeading;
