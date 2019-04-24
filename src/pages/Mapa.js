import React, { useState } from "react";
import Navigation from "../components/Navigation";
import MapReact from "../components/MapReact";
import database from "../data/db";
import "../App.css";

function Mapa() {
  return (
    <div className="app">
      <Navigation />
      <MapReact markers={database} />
    </div>
  );
}

export default Mapa;
