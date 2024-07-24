import "./register.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", {
        username,
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <>
      <div className="registerPage">
        <div className="formContainer">
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
              <h1>Create an Account</h1>
              <input
                name="username"
                type="text"
                placeholder="Username"
                required
              />
              <input name="email" type="text" placeholder="Email" required />
              <input
                name="password"
                type="text"
                placeholder="Password"
                required
              />
              <button>Register</button>
              {error && <span className="error">{error}</span>}
              <Link to="/login">Already have an account?</Link>
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
