import { listData } from "../../lib/testdata";
import "./listPage.scss";

const listPage = () => {
  const data = listData;

  return (
    <>
      <div className="listPage">
        <div className="listContainer">
          <div className="wrapper">List</div>
        </div>
        <div className="mapContainer">Map</div>
      </div>
    </>
  );
};

export default listPage;
