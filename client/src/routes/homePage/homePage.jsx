import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere
            veniam enim voluptate dolorum, quod nulla minus delectus odit esse
            exercitationem soluta perferendis optio temporibus tempore
            consequatur. Soluta, facere repudiandae!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Properties Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
