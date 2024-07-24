import "./login.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

const Login = () => {
  const [error, setError] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="loginPage">
        <div className="formContainer">
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
              <h1>Welcome Back</h1>
              <input
                name="username"
                type="text"
                placeholder="Username"
                required
              />
              <input
                name="password"
                type="text"
                placeholder="Password"
                required
              />
              <button disabled={IsLoading}>Login</button>
              {error && <span className="error">{error}</span>}
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
