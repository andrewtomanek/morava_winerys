import React from "react";
import MapApp from "../components/map/MapContainer";
import database from "../data/db";
import "../App.css";

function Mapa() {
  return <MapApp markers={database} />;
}

export default Mapa;
