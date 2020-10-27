import React from "react";
import MapApp from "../components/map/MapContainer";
import database from "../data/db";



function Mapa() {
  return <MapApp markers={database} />;
}

export default Mapa;
