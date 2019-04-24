import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Map from "../components/Map";
import database from "../data/db";
import "../App.css";

function Mapa() {
  return (
    <div className="app">
      <Navigation />
      <Map markers={database} />
    </div>
  );
}

export default Mapa;
