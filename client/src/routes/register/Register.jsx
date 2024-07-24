import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="registerPage">
        <div className="formContainer">
          <div className="wrapper">
            <form>
              <h1>Create an Account</h1>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <button>Register</button>
              <Link to="/login">Do you have an account?</Link>
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

export default Register;
