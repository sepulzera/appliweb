import MuiTable from '@material-ui/core/Table';
import { TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

/** Column definition for {@link Table}. */
export type column = {
  /** Technical name of the column. Should be a property of data. */
  name: string;
  /** Displayed title of the column. Should be localized. */
  title: string;
  /** Sets the width of the column. */
  width?: string;
}

/** {@link Table} Props. */
export interface ITableProps {
  /** Caption for the table. */
  caption:    string;
  /** Column definition, see {@link column}. */
  columns:    Array<column>;
  /** Data to be displayed. Should include all properties defined by columns or it will throw. */
  data:       Array<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getData = (dat: any, col: string): any => {
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
            <TableCell
                key={col.name}
                style={{
                  width: col.width,
                }}>
              {col.title}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map((dat: any) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
          <TableRow key={dat.id}>
            {cols.map((col: string) => (
              <TableCell key={col}>{getData(dat, col)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </MuiTable>
  );
};

export default Table;
