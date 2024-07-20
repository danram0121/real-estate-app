import "./listDetail.scss";
import { singlePostData, userData } from "../../lib/testdata";
import Slider from "../../components/slider/Slider";

const ListDetail = () => {
  return (
    <>
      <div className="listDetail">
        <div className="details">
          <div className="wrapper">
            <Slider images={singlePostData.images} />
            <div className="info">
              <div className="top">
                <div className="post">
                  <h1>{singlePostData.title}</h1>
                  <p className="address">
                    <img src="./pin.png" alt="" />
                    <span>{singlePostData.address}</span>
                  </p>
                  <p className="price">$ {singlePostData.price}</p>
                </div>
                <div className="user">
                  <img src={userData.img} alt="" />
                  <span>{userData.name}</span>
                </div>
              </div>
              <div className="bottom">
                <p className="description">{singlePostData.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default ListDetail;
