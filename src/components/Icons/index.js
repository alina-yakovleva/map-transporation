import L from "leaflet";

export const fromIcon = new L.Icon({
  iconUrl: require("../../marker1.png"),

  iconAnchor: [25, 50],
  iconSize: new L.Point(50, 50),
});

export const toIcon = new L.Icon({
  iconUrl: require("../../marker2.png"),

  iconAnchor: [25, 50],
  iconSize: new L.Point(50, 50),
});
