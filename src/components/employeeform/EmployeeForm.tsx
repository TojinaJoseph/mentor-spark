import { useState } from "react";
import Button from "../button/Button";
import Input from "../Input/Input";
import styles from "./EmployeeForm.module.scss";

export interface EmployeeFormProps {
  Buttonlabel: string;
  onSubmit: (data: formValues) => void;
}
export interface formValues {
  empName: string;
  designation: string;
  experience: number;
  expertise: string;
}
const EmployeeForm: React.FC<EmployeeFormProps> = ({
  Buttonlabel = "submit",
  onSubmit,
}) => {
  const [formData, setFormData] = useState<formValues>({
    empName: "",
    designation: "",
    experience: 0,
    expertise: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      empName: "",
      designation: "",
      experience: 0,
      expertise: "",
    });
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          label="EmployeeName"
          name="empName"
          placeholder="Enter Name"
          value={formData.empName}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Designation"
          name="designation"
          placeholder="Enter Designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <Input
          type="number"
          label="Experience"
          name="experience"
          placeholder="Enter Year Of Experience"
          value={formData.experience}
          onChange={handleChange}
        />
        <Input
          type="text"
          label="Area of Expertise"
          name="expertise"
          placeholder="Enter Area of Expertise"
          value={formData.expertise}
          onChange={handleChange}
        />
        <Button label={Buttonlabel} />
      </form>
    </div>
  );
};
export default EmployeeForm;
