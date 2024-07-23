import "./profilePage.scss";
import { userData } from "../../lib/testdata";
import List from "../../components/list/List";

const ProfilePage = () => {
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
          <div className="wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
