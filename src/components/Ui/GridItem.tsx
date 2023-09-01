import MuiGrid from '@mui/material/Grid';

import { AnyComponent } from '../../types/Types';

type gridItemSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | true;

/**
 * {@link GridItem} Props.
 */
export interface IGridItemProps {
  xs?: gridItemSizeType;
  sm?: gridItemSizeType;
  md?: gridItemSizeType;

  /** Classes used for styling. */
  className?: string | undefined;

  /** Text to render. */
  children: AnyComponent;
}

function autoCalc(ownVal: gridItemSizeType | undefined, parentVal: gridItemSizeType | undefined): gridItemSizeType {
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
}

/**
 * Renders a grid item.
 *
 * @param props - {@link IGridItemProps}.
 */
const GridItem: React.FC<IGridItemProps> = ({ xs, sm, md, children, ...rest }: IGridItemProps) => {
  const mdD = md;
  const smD = autoCalc(sm, mdD);
  const xsD = autoCalc(xs, smD);

  return (
    <MuiGrid item xs={xsD} sm={smD} md={mdD} {...rest}>
      {children}
    </MuiGrid>
  );
};

export default GridItem;
