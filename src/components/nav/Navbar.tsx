import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.profilePic}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN8pmCkUBpnfur_9855v_RO8Ay1-APdi4W0w&s" />
      </div>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
