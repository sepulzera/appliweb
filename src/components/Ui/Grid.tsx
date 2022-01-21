import MuiGrid from '@mui/material/Grid';

import { IGridItemProps } from './GridItem';

/** {@link Grid} Props. */
export interface IGridProps {
  /** Grid-spacing aronud the items. Default: 3. */
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | undefined;
  /** Classes used for styling. */
  className?: string | undefined;
  /** List of {@link GridItem}s. */
  children: React.ReactElement<IGridItemProps> | Array<React.ReactElement<IGridItemProps>>;
}

/**
 * Renders a grid container for {@link GridItem}s.
 *
 * @param props - {@link IGridProps}.
 */
const Grid: React.FC<IGridProps> = (props: IGridProps) => (
  <MuiGrid container spacing={3} className={props.className}>
    {props.children}
  </MuiGrid>
);

export default Grid;
