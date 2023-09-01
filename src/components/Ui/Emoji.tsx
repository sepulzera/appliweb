import { makeStyles } from 'tss-react/mui';

import { AnyComponent } from '../../types/Types';

/** {@link Emoji} Props. */
export interface IEmojiProps {
  /** Alternative text used by assistive technologies. If not set, this emoji won't be visible to screen readers. */
  label?:     string;
  /** Emoji. */
  children:   AnyComponent;
}

const useStyles = makeStyles()(({
  emoji: {
    fontFamily: [
      'apple color emoji',
      'segoe ui emoji',
      'noto color emoji',
      'android emoji',
      'emojisymbols',
      'emojione mozilla',
      'twemoji mozilla',
      'segoe ui symbol',
      'sans-serif',
    ].join(','),
  },
}));

/**
 * Renders an accessible unicode emoji.
 *
 * @param props - {@link IEmojiProps}.
 */
const Emoji: React.FC<IEmojiProps> = ({ label, children, ...rest }: IEmojiProps) => {
  const { classes } = useStyles();
  return (
    <span className={classes.emoji} role='img' aria-label={label || ''} {...rest}>{children}</span>
  );
};

export default Emoji;
