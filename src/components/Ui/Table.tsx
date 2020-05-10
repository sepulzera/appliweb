import * as React from 'react';

import MuiTable from '@material-ui/core/Table';
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

/** Column definition for {@link Table}. */
export type column = {
  /** Technical name of the column. Should be a property of data. */
  name: string;
  /** Displayed title of the column. Should be localized. */
  title: string;
}

/** {@link Table} Props. */
export interface ITableProps {
  /** Caption for the table. */
  caption:    string;
  /** Column definition, see {@link column}. */
  columns:    Array<column>;
  /** Data to be displayed. Should include all properties defined by columns or it will throw. */
  data:       Array<any>;
}

/**
 * Renders an HTML table.
 *
 * @param props - {@link ITableProps}.
 */
const Table: React.FC<ITableProps> = (props: ITableProps) => {
  const cols: Array<string> = props.columns.map((col: column) => (
    col.name
  ));

  const getData = (dat: any, col: string) => {
    const d = dat[col];
    return d;
  };

  if (props.columns.length === 0) return null;

  return (
    <MuiTable size='small'>
      <caption>{props.caption}</caption>
      <TableHead>
        <TableRow>
          {props.columns.map((col: column) => (
            <TableCell>{col.title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((dat: any) => (
          <TableRow key={dat.id}>
            {cols.map((col: string) => (
              <TableCell>{getData(dat, col)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

export default Table;
