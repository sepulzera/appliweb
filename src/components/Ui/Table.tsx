import MuiTable from '@mui/material/Table';
import { TableHead, TableRow, TableCell, TableBody } from '@mui/material';

/** Column definition for {@link Table}. */
export type column = {
  /** Technical name of the column. Should be a property of data. */
  name: string;
  /** Displayed title of the column. Should be localized. */
  title: string;
  /** Sets the width of the column. */
  width?: string;
}

/** {@link Table}  */
export interface ITableProps {
  /** Caption for the table. */
  caption:    string;
  /** Column definition, see {@link column}. */
  columns:    Array<column>;
  /** Data to be displayed. Should include all properties defined by columns or it will throw. */
  data:       Array<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getData(dat: any, col: string): any {
  const d = dat[col];
  return d;
}

/**
 * Renders an HTML table.
 *
 * @param props - {@link ITableProps}.
 */
const Table: React.FC<ITableProps> = ({ caption, columns, data, ...rest }: ITableProps) => {
  const cols: Array<string> = columns.map((col: column) => (
    col.name
  ));

  if (columns.length === 0) return null;

  return (
    <MuiTable size='small' {...rest}>
      <caption>{caption}</caption>
      <TableHead>
        <TableRow>
          {columns.map((col: column) => (
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
        {data.map((dat: any) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
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
