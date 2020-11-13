import * as React from 'react';
import MuiGrid from '@material-ui/core/Grid';

import { IGridItemProps } from './GridItem';

/** {@link Grid} Props. */
export interface IGridProps {
  /** List of {@link GridItem}s. */
  children: React.ReactElement<IGridItemProps> | Array<React.ReactElement<IGridItemProps>>;
}

/**
 * Renders a grid container for {@link GridItem}s.
 *
 * @param props - {@link IGridProps}.
 */
const Grid: React.FC<IGridProps> = (props: IGridProps) => (
  <MuiGrid container spacing={3}>
    {props.children}
  </MuiGrid>
);

export default Grid;
