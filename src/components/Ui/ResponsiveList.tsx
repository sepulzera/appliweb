import { cx } from '@emotion/css';
import { makeStyles } from 'tss-react/mui';

import { IListItemProps } from './ListItem';
import H from './H';

/**
 * {@link ResponsiveList} Props.
 */
interface IResponsiveListProps {
  /** Title. */
  title:     string;
  /** True: Display vertically. False: Display horizontally. */
  asRow:     boolean;
  /** True: List items get spaced between. False: No stretching. Note: Only when asRow is false. Default: False. */
  stretchList?:  boolean | undefined;
  /** Classes used for styling. */
  className?: string | undefined;
  /** Classes used for styling of the heading. */
  titleClassName?: string | undefined;
  /** List of {@link ListItem}. */
  children?: React.ReactElement<IListItemProps> | Array<React.ReactElement<IListItemProps>> | React.ReactNode;
}

const useStyles = makeStyles()((theme => ({
  responsiveList: {
    display: 'flex',
    margin: 0,
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,

    [theme.breakpoints.down('lg')]: {
      borderRadius: `0 ${theme.spacing(1)} 0 0`,
    },
    [theme.breakpoints.up('lg')]: {
      borderRadius: `${theme.spacing(1)} ${theme.spacing(1)} 0 0`,
    },
  },
  responsiveListAsColumn: {
    flexDirection: 'column',
    width: 'min-content',
  },
  responsiveListAsRow: {
    minWidth: '100%',
  },

  responsiveListTitle: {
    textTransform: 'capitalize',
    display: 'inline-flex',
    lineHeight: 1,
    alignSelf: 'center',
  },
  responsiveListTitleAsColumn: {
    margin: `${theme.spacing(2)} 0`,
  },
  responsiveListTitleAsRow: {
    margin: 0,
  },
  responsiveListAsRowTitleAsHeading: {
    display: 'inline-flex',
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      left: '-10000px',
      top: 'auto',
      width: '1px',
      height: '1px',
      overflow: 'hidden',
    },
  },
  responseListTitleInList: {
    [theme.breakpoints.up('md')]: {
      display: 'none !important',
    },
  },

  responsiveListList: {
    flex: 1,

    display: 'flex',

    '& li': {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
    },
  },
  responsiveListListAsColumn: {
    flexDirection: 'column',

    padding: 0,

    '& li': {
      marginTop: 'auto',
      marginBottom: 'auto',
    },
  },
  responsiveListAsColumnStretch: {
    justifyContent: 'space-between',
  },
  responsiveListListAsRow: {
    flexWrap: 'wrap',

    padding: 0,
    margin:  0,

    '& li': {
      display: 'inline',
    },
  },
})));

/**
 * Responsive list.
 *
 * @param props - {@link IResponsiveListProps}.
 */
const ResponsiveList: React.FC<IResponsiveListProps> = (props: IResponsiveListProps) => {
  const { classes } = useStyles();

  const heading = (
    <H
        variant='h3'
        className={cx(classes.responsiveListTitle, props.titleClassName, {
            [classes.responsiveListTitleAsColumn]: !props.asRow,
            [classes.responsiveListTitleAsRow]: props.asRow,
        })}>
      {`${props.title}:`}
    </H>
  );

  return (
    <div className={cx(classes.responsiveList, props.className, {
      [classes.responsiveListAsColumn]: !props.asRow,
      [classes.responsiveListAsRow]: props.asRow,
    })}>
      <span className={cx({ [classes.responsiveListAsRowTitleAsHeading]: props.asRow })}>{heading}</span>
      <ul className={cx(classes.responsiveListList, {
        [classes.responsiveListAsColumnStretch]: props.stretchList,
        [classes.responsiveListListAsColumn]: !props.asRow,
        [classes.responsiveListListAsRow]: props.asRow,
      })}>
        {props.asRow && <li className={classes.responseListTitleInList} aria-hidden='true'>{heading}</li>}
        {props.children}
      </ul>
    </div>
  );
};

export default ResponsiveList;
