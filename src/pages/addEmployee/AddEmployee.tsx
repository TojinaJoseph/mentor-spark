import styles from "./AddEmployee.module.scss";
import EmployeeForm, {
  type formValues,
} from "../../components/employeeform/EmployeeForm";

export interface AddEmployeeProps {
  name?: string;
}
const AddEmployee: React.FC<AddEmployeeProps> = ({ name }) => {
  const handleSubmit = (data: formValues) => {
    console.log(data);
  };
  return (
    <div className={styles.AddEmployeeContainer}>
      <EmployeeForm Buttonlabel={`Add ${name}`} onSubmit={handleSubmit} />
    </div>
  );
};
export default AddEmployee;
