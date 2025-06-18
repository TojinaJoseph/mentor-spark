import { Outlet } from "react-router-dom";
import Navbar from "../../components/nav/Navbar";
import styles from "./Root.module.scss";
const Root = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
