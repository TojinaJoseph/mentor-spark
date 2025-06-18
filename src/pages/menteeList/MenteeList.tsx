import Table from "../../components/table/Table";
import styles from "./MenteeList.module.scss";
const mentees = [
  { id: 1, name: "Mentee 1", designation: "Senior software engineer" },
  { id: 2, name: "Mentee 2", designation: "Senior software engineer" },
  { id: 3, name: "Mentee 3", designation: "Senior software engineer" },
];

const MenteeList = () => {
  return (
    <div className={styles.container}>
      <Table data={mentees} />
    </div>
  );
};

export default MenteeList;
