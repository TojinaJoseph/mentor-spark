import styles from "./Table.module.scss";
interface tableProps {
  data: {
    id: number;
    name: string;
    designation: string;
  }[];
}
const Table: React.FC<tableProps> = ({ data }) => {
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <td>Id</td>
          <td>Name</td>
          <td>Designation</td>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
