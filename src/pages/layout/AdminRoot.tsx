import styles from "./Root.module.scss";
import AdminNavigation from "../../components/nav/adminNavigation/AdminNavigation";
import { Outlet } from "react-router-dom";

const AdminRoot = () => {
  return (
    <div className={styles.container}>
      <AdminNavigation />
      <Outlet />
    </div>
  );
};

export default AdminRoot;
