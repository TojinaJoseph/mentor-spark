import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = (item: Option) => {
    setOpen(false);
    onSelect(item);
  };
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className={styles.dropdownContainer} ref={ref}>
      <label className={styles.label}>{label}</label>
      <div className={styles.dropdown}>
        <input
          placeholder={placeholder}
          value={selected ? selected.name : ""}
          onChange={() => setOpen(true)}
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
