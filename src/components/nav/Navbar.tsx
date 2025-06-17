import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Admin
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
