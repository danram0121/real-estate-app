/* eslint-disable react/prop-types */
import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

const Map = ({ items }) => {
  const avgCoords =
    items.length > 0
      ? [
          items.reduce((sum, item) => sum + parseFloat(item.latitude), 0) /
            items.length,
          items.reduce((sum, item) => sum + parseFloat(item.longitude), 0) /
            items.length,
        ]
      : [39.98047, -100.50376];

  return (
    <MapContainer
      center={[String(avgCoords[0]), String(avgCoords[1])]}
      zoom={4}
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
  );
};

export default Map;
