import Table from "../../components/table/Table";
import styles from "./MentorsList.module.scss";
const mentors = [
  { id: 1, name: "Mentor 1", designation: "Senior software engineer" },
  { id: 2, name: "Mentor 2", designation: "Senior software engineer" },
  { id: 3, name: "Mentor 3", designation: "Senior software engineer" },
];
const MentorsList = () => {
  return (
    <div className={styles.container}>
      <Table data={mentors} />
    </div>
  );
};

export default MentorsList;
