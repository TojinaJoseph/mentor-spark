import styles from "./Admin.module.scss";
import Tabs, { type tab } from "../../components/tabs/Tabs";
import AddEmployee from "../addEmployee/AddEmployee";
import Home from "./adminHome/Home";

const Admin = () => {
  const tabs: tab[] = [
    { id: 0, name: "Home", children: <Home /> },
    { id: 1, name: "Add Mentor", children: <AddEmployee name="Mentor" /> },
    { id: 2, name: "Add Mentee", children: <AddEmployee name="Mentee" /> },
  ];
  return (
    <div>
      <div className={styles.adminContainer}>
        <Tabs tabs={tabs} />
      </div>

      {/* <ul>
        {mentors.map((i) => (
          <li key={i.id}>
            <Link to={`/profile/${i.id}`}>{i.name}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Admin;
