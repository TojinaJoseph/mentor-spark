import { useState } from "react";
import Dropdown, { type Option } from "../../../components/dropdown/Dropdown";
import Table, { type Column } from "../../../components/table/Table";
import styles from "./Home.module.scss";
import Button from "../../../components/button/Button";

interface User {
  mentor: string;
  mentee: string;
}

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
  const [map, setMap] = useState<User[]>([]);

  const userColumns: Column<User>[] = [
    { key: "mentor", header: "Mentor" },
    { key: "mentee", header: "Mentee" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser: User = {
      mentor: selectedMentorValue?.name || "",
      mentee: selectedMenteesValue?.name || "",
    };
    setMap((prev) => [...prev, newUser]);
    setSelectedMenteesValue(null);
    setSelectedMentorValue(null);
  };

  return (
    <div className={styles.home}>
      <form className={styles.mapSection} onSubmit={handleSubmit}>
        <div className={styles.dropdowns}>
          <Dropdown
            label="mentor"
            placeholder="select a mentor"
            options={mentorsOptions}
            selected={selectedMentorValue}
            onSelect={setSelectedMentorValue}
          />
          <Dropdown
            label="mentee"
            placeholder="select a mentee"
            options={menteesOptions}
            selected={selectedMenteesValue}
            onSelect={setSelectedMenteesValue}
          />
        </div>
        <div className={styles.mapButton}>
          <Button
            label="map"
            disabled={!selectedMenteesValue || !selectedMentorValue}
          />
        </div>
      </form>
      {map.length !== 0 && <Table data={map} columns={userColumns} />}
    </div>
  );
};
export default Home;
