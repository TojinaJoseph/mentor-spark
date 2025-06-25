import type { JSX } from "react";
import styles from "./Table.module.scss";
export interface Column<T> {
  key: keyof T;
  header: string;
}
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}
const Table = <T extends object>({
  data,
  columns,
}: TableProps<T>): JSX.Element => {
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={String(col.key)}>{String(row[col.key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
