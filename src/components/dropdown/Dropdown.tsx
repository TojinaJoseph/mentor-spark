import { useState } from "react";
import styles from "./Dropdown.module.scss";
import downArrow from "./ChevronDown.svg";
import upArrow from "./ChevronUp.svg";

export interface Option {
  id: number;
  value: string;
  name: string;
}
export interface DropdownProps {
  options: Option[];
  label: string;
  placeholder: string;
  selected: Option | null;
  onSelect: (value: Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder,
  onSelect,
  selected,
  options,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (item: Option) => {
    setOpen(false);
    onSelect(item);
  };
  return (
    <div className={styles.dropdownContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.dropdown}>
        <input
          placeholder={placeholder}
          value={selected ? selected.name : ""}
        />
        <span onClick={() => setOpen(!open)} className={styles.showIcon}>
          <img src={open ? upArrow : downArrow} />
        </span>
      </div>
      {open && (
        <ul className={styles.optionList}>
          {options.map((i) => (
            <li key={i.id} onClick={() => handleClick(i)}>
              {i.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
