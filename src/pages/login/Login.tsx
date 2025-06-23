import Button from "../../components/button/Button";
import Input from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/admin");
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
            value="username"
            onChange={() => {}}
          />
          <Input
            type="password"
            label="password"
            name="password"
            placeholder="enter password"
            value="password"
            onChange={() => {}}
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
