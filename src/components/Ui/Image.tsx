import * as React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles({
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
});

/**
 * Renders an image.
 *
 * @param props - {@link IImageProps}.
 */
const Image: React.FC<IImageProps> = (props: IImageProps) => {
  const classes = useStyles();

  const img = AssetsHelper.getAsset(props.src);

  return (
    <div className={clsx(classes.root, props.className)}>
      <img alt={img.default} src={img.default} className={classes.img} />
    </div>
  );
};

export default Image;
