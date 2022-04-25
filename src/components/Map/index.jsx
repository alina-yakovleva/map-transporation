import { MapContainer, TileLayer } from "react-leaflet";
import Routing from "./Routing";

const center = [55.751244, 37.618423];

const Map = ({ waypoints, onChange }) => {
  return (
    <MapContainer
      style={{ height: "100vh" }}
      center={center}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Routing waypoints={waypoints} onChange={onChange} />
    </MapContainer>
  );
};
export default Map;
