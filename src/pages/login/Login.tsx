import Button from "../../components/button/Button";
import Input from "../../components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <form>
          <Input
            type="text"
            label="username"
            name="username"
            placeholder="enter username"
          />
          <Input
            type="password"
            label="password"
            name="password"
            placeholder="enter password"
          />
          <Button label="Login" onClick={() => {}} />
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
