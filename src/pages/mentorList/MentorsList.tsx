import Table, { type Column } from "../../components/table/Table";
import styles from "./MentorsList.module.scss";
interface mentor {
  id: number;
  name: string;
  designation: string;
}

const MentorsList = () => {
  const mentors: mentor[] = [
    { id: 1, name: "Mentor 1", designation: "Senior software engineer" },
    { id: 2, name: "Mentor 2", designation: "Senior software engineer" },
    { id: 3, name: "Mentor 3", designation: "Senior software engineer" },
  ];
  const mentorColumns: Column<mentor>[] = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "designation", header: "Designation" },
  ];
  return (
    <div className={styles.container}>
      <Table data={mentors} columns={mentorColumns} />
    </div>
  );
};

export default MentorsList;
