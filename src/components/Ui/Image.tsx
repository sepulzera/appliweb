import * as React from 'react';
import clsx from 'clsx';

import MuiAvatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import AssetsHelper from '../../assets/AssetsHelper';

const useStyles = makeStyles({
  img: {
    width:  'auto',
    height: 'auto',
  },
});

/** {@link Image} Props. */
export interface IImageProps {
  /** URI to the resource. */
  src: string;
  /** Alt-Text if image has contextual meaning. */
  alt?: string | undefined;
  /** Classes used for styling. */
  className?: string | undefined;
}

/**
 * Renders an image.
 *
 * @param props - {@link IImageProps}.
 */
const Image: React.FC<IImageProps> = (props: IImageProps) => {
  const classes = useStyles();

  const img = AssetsHelper.getAsset(props.src);

  return (
    <MuiAvatar variant='square' alt={props.alt} src={img} className={clsx(classes.img, props.className)} />
  );
};

export default Image;
