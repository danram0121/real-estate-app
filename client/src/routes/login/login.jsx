import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="loginPage">
        <div className="formContainer">
          <div className="wrapper">
            <form>
              <h1>Welcome Back</h1>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
              <button>Login</button>
              <Link to="/register">Don't have an account?</Link>
            </form>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Login;
