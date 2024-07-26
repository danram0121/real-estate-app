import "./profileUpdatePage.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

const ProfileUpdatePage = () => {
  const [error, setError] = useState(false);
  const { updateUser, currentUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState([]);

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
        avatar: avatar[0],
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
            src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
            alt=""
            className="avatar"
          />
          <UploadWidget
            uwConfig={{
              cloudName: import.meta.env.VITE_CLOUD_NAME,
              uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
              multiple: false,
              maxImageFileSize: 200000000,
              folder: "avatars",
            }}
            setState={setAvatar}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileUpdatePage;
