import "./listDetail.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import DOMPurify from "dompurify";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

const ListDetail = () => {
  const post = useLoaderData();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [saved, setSaved] = useState(post.isSaved);

  const handleSave = async () => {
    // FOLLOWING REACT 19 UPDATE TO USE useOptimistic HOOK
    setSaved((prev) => !prev);
    if (!currentUser) {
      navigate("/login");
    }

    try {
      await apiRequest.post("/users/save", {
        postId: post.id,
      });
    } catch (error) {
      console.log(error);
      setSaved((prev) => !prev); // REVERT BACK TO ORIGINAL STATE
    }
  };
  return (
    <>
      <div className="listDetail">
        <div className="details">
          <div className="wrapper">
            <Slider images={post.images} />
            <div className="info">
              <div className="top">
                <div className="post">
                  <p className="price">$ {post.price}</p>
                  <p className="address">
                    <span>
                      <img src="./pin.png" alt="" /> <p>{post.address}</p>{" "}
                      <p>, {post.city}</p>
                    </span>
                    <span>
                      {post.state} {post.zip}
                    </span>
                  </p>
                </div>
                <div className="user">
                  <img src={post.user.avatar} alt="" />
                  <span>{post.user.username}</span>
                </div>
              </div>
              <div className="bottom">
                <div
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.postDetail.description),
                  }}
                ></div>
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
                  {post.postDetail.utilities === "owner" ? (
                    <p>Owner is responsible</p>
                  ) : (
                    <p>Renter is responsible</p>
                  )}
                </div>
              </div>
              <div className="feature">
                <img src="/pet.png" alt="" />
                <div className="featureText">
                  <span>Pet Policy</span>
                  {post.postDetail.pet === "allowed" ? (
                    <p>Pets Allowed</p>
                  ) : (
                    <p>No Pets Allowed</p>
                  )}
                </div>
              </div>
              <div className="feature">
                <img src="/fee.png" alt="" />
                <div className="featureText">
                  <span>Property Fees</span>
                  <p>{post.postDetail.income}</p>
                </div>
              </div>
            </div>
            <p className="title">Room Sizes</p>
            <div className="sizes">
              <div className="feature">
                <img src="/bed.png" alt="" />
                <span>{post.bedroom} bed</span>
              </div>
              <div className="feature">
                <img src="/bath.png" alt="" />
                <span>{post.bathroom} bath</span>
              </div>
              <div className="feature">
                <img src="/size.png" alt="" />
                <span>
                  {Math.round(post.postDetail.size / 10.761)} sqm (
                  {post.postDetail.size} sqft)
                </span>
              </div>
            </div>
            <p className="title">Nearby Places</p>
            <div className="listHorizontal">
              <div className="places">
                <div className="feature">
                  <img src="/school.png" alt="" />
                  <div className="featureText">
                    <span>School</span>
                    <p>
                      {post.postDetail.school > 999
                        ? post.postDetail.school / 1000 + "km"
                        : post.postDetail.school + "m"}{" "}
                      away
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/bus.png" alt="" />
                  <div className="featureText">
                    <span>Bus Stop</span>
                    <p>
                      {post.postDetail.bus > 999
                        ? post.postDetail.bus / 1000 + "km"
                        : post.postDetail.bus + "m"}{" "}
                      away
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/restaurant.png" alt="" />
                  <div className="featureText">
                    <span>Restaurant</span>
                    <p>
                      {post.postDetail.restaurant > 999
                        ? post.postDetail.restaurant / 1000 + "km"
                        : post.postDetail.restaurant + "m"}{" "}
                      away
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="title">Location</p>
            <div className="mapContainer">
              <Map items={[post]} />
            </div>
            <div className="buttons">
              <button className="button">
                <img src="/chat.png" alt="" />
                Send a Message
              </button>
              <button className="button" onClick={handleSave}>
                <img src="/save.png" alt="" />
                {saved ? "Property Saved" : "Save Property"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListDetail;
