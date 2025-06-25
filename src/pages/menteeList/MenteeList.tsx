import Table, { type Column } from "../../components/table/Table";
import styles from "./MenteeList.module.scss";
interface mentee {
  id: number;
  name: string;
  designation: string;
}

const MenteeList = () => {
  const mentees: mentee[] = [
    { id: 1, name: "Mentee 1", designation: "Senior software engineer" },
    { id: 2, name: "Mentee 2", designation: "Senior software engineer" },
    { id: 3, name: "Mentee 3", designation: "Senior software engineer" },
  ];
  const menteeColumns: Column<mentee>[] = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "designation", header: "Designation" },
  ];
  return (
    <div className={styles.container}>
      <Table data={mentees} columns={menteeColumns} />
    </div>
  );
};

export default MenteeList;
