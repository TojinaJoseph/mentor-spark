import { useState } from "react";
import Dropdown, { type Option } from "../../../components/dropdown/Dropdown";
import Table from "../../../components/table/Table";
import styles from "./Home.module.scss";
import Button from "../../../components/button/Button";

const Home = () => {
  const mentorsOptions: Option[] = [
    { id: 1, name: "mentor1", value: "mentor 1" },
    { id: 2, name: "mentor2", value: "mentor2" },
    { id: 3, name: "mentor3", value: "mentor3" },
  ];
  const menteesOptions: Option[] = [
    { id: 1, name: "mentee1", value: "mentee 1" },
    { id: 2, name: "mentee2", value: "mentee2" },
    { id: 3, name: "mentee3", value: "mentee3" },
  ];
  const [selectedMentorValue, setSelectedMentorValue] = useState<Option | null>(
    null
  );
  const [selectedMenteesValue, setSelectedMenteesValue] =
    useState<Option | null>(null);
  const mentees = [
    { id: 1, name: "Mentee 1", designation: "Senior software engineer" },
    { id: 2, name: "Mentee 2", designation: "Senior software engineer" },
    { id: 3, name: "Mentee 3", designation: "Senior software engineer" },
  ];
  console.log(selectedMentorValue);
  return (
    <div className={styles.home}>
      <div className={styles.mapSection}>
        <div className={styles.dropdowns}>
          <Dropdown
            label="mentors"
            placeholder="select a mentor"
            options={mentorsOptions}
            selected={selectedMentorValue}
            onSelect={setSelectedMentorValue}
          />
          <Dropdown
            label="mentees"
            placeholder="select a mentee"
            options={menteesOptions}
            selected={selectedMenteesValue}
            onSelect={setSelectedMenteesValue}
          />
        </div>
        <div className={styles.mapButton}>
          <Button label="map" />
        </div>
      </div>
      <Table data={mentees} />
    </div>
  );
};
export default Home;
