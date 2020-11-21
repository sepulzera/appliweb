import * as React from 'react';
import MuiGrid from '@material-ui/core/Grid';

import { AnyComponent } from '../../types/Types';

type gridItemSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | true;

/**
 * {@link GridItem} Props.
 */
export interface IGridItemProps {
  xs?: gridItemSizeType;
  sm?: gridItemSizeType;
  md?: gridItemSizeType;

  autoCalc?: boolean | undefined;

  /** Classes used for styling. */
  className?: string | undefined;

  /** Text to render. */
  children: AnyComponent;
}

/**
 * Renders a grid item.
 *
 * @param props - {@link IGridItemProps}.
 */
const GridItem: React.FC<IGridItemProps> = (props: IGridItemProps) => {
  const autoCalc = (ownVal: gridItemSizeType | undefined, parentVal: gridItemSizeType | undefined): gridItemSizeType => {
    let newVal: gridItemSizeType;

    if (ownVal == null) {
      if (parentVal == null) {
        newVal = 6;
      } else if (parentVal === true) {
        newVal = true;
      } else if (parentVal > 6) {
        newVal = 12;
      } else {
        newVal = 6;
      }
    } else {
      newVal = ownVal;
    }

    return newVal;
  };

  const { md } = props;
  let { xs, sm } = props;
  sm = autoCalc(sm, md);
  xs = autoCalc(xs, sm);

  return (
    <MuiGrid item xs={xs} sm={sm} md={md} className={props.className}>
      {props.children}
    </MuiGrid>
  );
};

export default GridItem;
