import "./newPostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewPostPage = () => {
  return (
    <>
      <div className="newPostPage">
        <div className="formContainer">
          <h1>Add New Post</h1>
          <div className="wrapper">
            <form>
              <div className="item">
                <label htmlFor="price">Price</label>
                <input id="price" name="price" type="number" />
              </div>
              <div className="item">
                <label htmlFor="type">Type</label>
                <select name="type">
                  <option value="rent" defaultChecked>
                    Rent
                  </option>
                  <option value="buy">Buy</option>
                </select>
              </div>
              <div className="item">
                <label htmlFor="property">Property</label>
                <select name="property">
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div className="address">
                <div className="item primary">
                  <label htmlFor="address">Street Address</label>
                  <input id="address" name="address" type="text" />
                </div>
                <div className="item secondary">
                  <label htmlFor="city">City</label>
                  <input id="city" name="city" type="text" />
                </div>
                <div className="item secondary">
                  <label htmlFor="state">State</label>
                  <input id="state" name="state" type="text" />
                </div>
                <div className="item secondary">
                  <label htmlFor="zip">Zipcode</label>
                  <input id="zip" name="zip" type="number" />
                </div>
              </div>
              <div className="item description">
                <label htmlFor="description">Description</label>
                <ReactQuill theme="snow" />
              </div>
              <div className="item">
                <label htmlFor="bedroom">Bedroom</label>
                <input id="bedroom" name="bedroom" type="text" />
              </div>
              <div className="item">
                <label htmlFor="bathroom">Bathroom</label>
                <input id="bathroom" name="bathroom" type="text" />
              </div>
              <div className="item">
                <label htmlFor="size">Total Size (sqft)</label>
                <input min={0} id="size" name="size" type="text" />
              </div>
              <div className="policy">
                <div className="item">
                  <label htmlFor="utilities">Utilities Policy</label>
                  <select name="utilities">
                    <option value="owner">Owner is responsible</option>
                    <option value="tenant">Tenant is responsible</option>
                    <option value="shared">Shared</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="pet">Pet Policy</label>
                  <select name="pet">
                    <option value="allowed">Allowed</option>
                    <option value="not-allowed">Not Allowed</option>
                  </select>
                </div>
                <div className="item">
                  <label htmlFor="income">Income Policy</label>
                  <input type="text" name="income" id="income" />
                </div>
              </div>
              <div className="item">
                <label htmlFor="school">School</label>
                <input min={0} id="school" name="school" type="text" />
              </div>
              <div className="item">
                <label htmlFor="bus">Bus</label>
                <input min={0} id="bus" name="bus" type="text" />
              </div>
              <div className="item">
                <label htmlFor="restaurant">Restaurant</label>
                <input min={0} id="restaurant" name="restaurant" type="text" />
              </div>
              <div className="item">
                <label htmlFor="latitude">Latitude</label>
                <input id="latitude" name="latitude" type="text" />
              </div>
              <div className="item">
                <label htmlFor="longitude">Longitude</label>
                <input id="longitude" name="longitude" type="text" />
              </div>
              <button className="sendButton">Add</button>
            </form>
          </div>
        </div>
        <div className="sideContainer"></div>
      </div>
    </>
  );
};

export default NewPostPage;
