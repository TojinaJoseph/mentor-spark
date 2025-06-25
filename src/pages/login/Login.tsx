import Button from "../../components/button/Button";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { useState } from "react";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginForm);
    navigate("admin");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="username"
            name="username"
            placeholder="enter username"
            value={loginForm.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            label="password"
            name="password"
            placeholder="enter password"
            value={loginForm.password}
            onChange={handleChange}
          />
          <Button label="Login" />
          {/* <p>
            Go to <Link to="/admin">Admin page</Link>
          </p>
          <p>
            <button onClick={() => navigate("/admin")}>Navigate</button>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
