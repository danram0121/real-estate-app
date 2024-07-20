/* eslint-disable react/prop-types */
import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

const Map = ({ items }) => {
  return (
    <>
      <div className="">
        <MapContainer
          center={[52.5, -1.9]}
          zoom={7}
          scrollWheelZoom={true}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {items.map((item) => (
            <Pin key={item.id} item={item} />
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
