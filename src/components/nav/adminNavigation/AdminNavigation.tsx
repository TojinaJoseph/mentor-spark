import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Navbar.module.scss";

const AdminNavigation = () => {
  return (
    <div>
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
                end
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="mentors"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Mentors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="mentees"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Mentees
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default AdminNavigation;
