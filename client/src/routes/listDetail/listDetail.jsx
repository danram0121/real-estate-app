import "./listDetail.scss";
import { singlePostData, userData } from "../../lib/testdata";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";

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
          <div className="wrapper">
            <p className="title">General</p>
            <div className="listVertical">
              <div className="feature">
                <img src="/utility.png" alt="" />
                <div className="featureText">
                  <span>Utilities</span>
                  <p>Renter is responsible</p>
                </div>
              </div>
              <div className="feature">
                <img src="/pet.png" alt="" />
                <div className="featureText">
                  <span>Pet Policy</span>
                  <p>Pets Allowed</p>
                </div>
              </div>
              <div className="feature">
                <img src="/fee.png" alt="" />
                <div className="featureText">
                  <span>Property Fees</span>
                  <p>Must have 3x the rent in total household income</p>
                </div>
              </div>
            </div>
            <p className="title">Room Sizes</p>
            <div className="sizes">
              <div className="feature">
                <img src="/size.png" alt="" />
                <span>
                  {Math.round(singlePostData.size / 10.761)} sqm (
                  {singlePostData.size} sqft)
                </span>
              </div>
              <div className="feature">
                <img src="/bed.png" alt="" />
                <span>{singlePostData.bedRooms} bed</span>
              </div>
              <div className="feature">
                <img src="/bath.png" alt="" />
                <span>{singlePostData.bathroom} bath</span>
              </div>
            </div>
            <p className="title">Nearby Places</p>
            <div className="listHorizontal">
              <div className="places">
                <div className="feature">
                  <img src="/school.png" alt="" />
                  <div className="featureText">
                    <span>School</span>
                    <p>{singlePostData.school}</p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/bus.png" alt="" />
                  <div className="featureText">
                    <span>Bus Stop</span>
                    <p>{singlePostData.bus}</p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/restaurant.png" alt="" />
                  <div className="featureText">
                    <span>Restaurant</span>
                    <p>{singlePostData.restaurant}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="title">Location</p>
            <div className="mapContainer">
              <Map items={[singlePostData]} />
            </div>
            <div className="buttons">
              <div className="button">
                <img src="/chat.png" alt="" />
                Send a Message
              </div>
              <div className="button">
                <img src="/save.png" alt="" />
                Save Property
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListDetail;
