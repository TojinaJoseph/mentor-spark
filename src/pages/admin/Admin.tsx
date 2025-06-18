import styles from "./Admin.module.scss";
import Button from "../../components/button/Button";

const Admin = () => {
  return (
    <div>
      <div className={styles.buttonContainer}>
        <Button label="Add Mentor" onClick={() => {}} />
        <Button label="Add Mentee" onClick={() => {}} />
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
