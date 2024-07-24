import "./profilePage.scss";
import { useNavigate } from "react-router-dom";
import { userData } from "../../lib/testdata";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");
      localStorage.removeItem("user");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="profilePage">
        <div className="details">
          <div className="wrapper">
            <div className="title">
              <h1>User Information</h1>
              <button>Update Profile</button>
            </div>
            <div className="info">
              <span>
                Avatar: <img src={userData.img} alt="" />
              </span>
              <span>
                Username: <b>{userData.name}</b>
              </span>
              <span>
                Email: <b>{userData.email}</b>
              </span>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="title">
              <h1>My Listings</h1>
              <button>Add New Post</button>
            </div>
            <List />
            <div className="title">
              <h1>My Saves</h1>
            </div>
            <List />
          </div>
        </div>
        <div className="chatContainer">
          <div className="wrapper">
            <Chat />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
