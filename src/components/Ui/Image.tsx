import { useMemo } from 'react';
import { cx } from '@emotion/css';
import { makeStyles } from 'tss-react/mui';

import AssetsHelper from '../../assets/AssetsHelper';

/** {@link Image} Props. */
export interface IImageProps {
  /** URI to the resource. */
  src: string;
  /** Alt-Text if image has contextual meaning. */
  alt?: string | undefined;
  /** Classes used for styling. */
  className?: string | undefined;
}

const useStyles = makeStyles()(({
  root: {
    // values from material-ui/avatar
    display:        'flex',
    overflow:       'hidden',
    alignItems:     'center',
    lineHeight:     1,
    userSelect:     'none',
    justifyContent: 'center',
  },
  img: {
    width:  '100%',
    height: '100%',
    // values from material-ui/avatar
    objectFit:  'cover',
    textAlign:  'center',
    textIndent: '10000px',
  },
}));

/**
 * Renders an image.
 *
 * @param props - {@link IImageProps}.
 */
const Image: React.FC<IImageProps> = ({ src, alt, className, ...rest }: IImageProps) => {
  const { classes } = useStyles();

  const img = useMemo(() => AssetsHelper.getAsset(src), [src]);

  return (
    <div className={cx(classes.root, className)}>
      <img alt={alt} src={img} className={classes.img} {...rest} />
    </div>
  );
};

export default Image;
