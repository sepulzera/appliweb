import Emoji from './Emoji';

/** {@link EmojiWord} Props. */
export interface IEmojiWordProps {
  /** Emoji unicode character. */
  emoji:      string;
  /** Emoji word. */
  children:   string;
}

/**
 * Renders an accessible unicode emoji with a following **non-breaking** word.
 *
 * @param props - {@link IEmojiWordProps}.
 */
const EmojiWord: React.FC<IEmojiWordProps> = ({ emoji, children, ...rest }: IEmojiWordProps) => (
  <>
    {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
    <Emoji {...rest}>{emoji}</Emoji>&nbsp;{children}
  </>
);

export default EmojiWord;
