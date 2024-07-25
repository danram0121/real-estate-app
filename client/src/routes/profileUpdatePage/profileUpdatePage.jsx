import "./profileUpdatePage.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

const ProfileUpdatePage = () => {
  const [error, setError] = useState(false);
  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
      });

      updateUser(res.data);

      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };
  return (
    <>
      <div className="profileUpdatePage">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h1>Update Profile</h1>
            <div className="item">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={currentUser.username}
              />
            </div>
            <div className="item">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={currentUser.email}
              />
            </div>
            <div className="item">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" />
            </div>
            <button>Update</button>
            {error && <span className="error">{error}</span>}
          </form>
        </div>
        <div className="sideContainer">
          <img
            src={currentUser.img || "/noavatar.jpg"}
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileUpdatePage;
