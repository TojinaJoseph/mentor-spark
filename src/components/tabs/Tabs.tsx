import { useState, type ReactNode } from "react";
import styles from "./Tabs.module.scss";

export interface tab {
  id: number;
  name: string;
  children: ReactNode;
}
export interface TabsProps {
  tabs: tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.tabsContainer}>
      <ul className={styles.tabList}>
        {tabs.map((i) => (
          <li
            onClick={() => setIndex(i.id)}
            className={index === i.id ? styles.active : undefined}
          >
            {i.name}
          </li>
        ))}
      </ul>

      <div className={styles.tabPanel}>
        <p>{tabs[index].children}</p>
      </div>
    </div>
  );
};
export default Tabs;
