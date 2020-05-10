import * as React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
});

/** {@link Emoji} Props. */
export interface IEmojiProps {
  /** Alternative text used by assistive technologies. If not set, this emoji won't be visible to screen readers. */
  label?:     string;
  /** Emoji. */
  children:   React.ReactNode;
}

/**
 * Renders an accessible unicode emoji.
 *
 * @param props - {@link IEmojiProps}.
 */
const Emoji: React.FC<IEmojiProps> = (props: IEmojiProps) => {
  const classes = useStyles();
  return (
    <span className={classes.emoji} role='img' aria-label={props.label || ''}>{props.children}</span>
  );
};

export default Emoji;
