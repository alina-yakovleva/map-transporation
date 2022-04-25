import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { fromIcon, toIcon } from "../Icons";

const transformToWaypoint = (waypoint) => L.latLng(...waypoint);

const defaultWaypoints = [
  [55.751244, 37.618423],
  [55.751244, 38.618423],
].map(transformToWaypoint);

export default function Routing({ waypoints, onChange }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: waypoints
        ? waypoints.map(transformToWaypoint)
        : defaultWaypoints,
      routeWhileDragging: true,
      createMarker: function (i, waypoint) {
        const marker = L.marker(waypoint.latLng, {
          draggable: true,
          bounceOnAdd: false,
          icon: i === 0 ? fromIcon : toIcon,
        });

        marker.on("dragend", function (e) {
          const { lat, lng } = e.target.getLatLng();
          const waypoint = [lat, lng];
          onChange(waypoint, i);
        });

        return marker;
      },
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, waypoints]);

  return null;
}
