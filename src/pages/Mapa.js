import React, { useState } from "react";
import Navigation from "../components/Navigation";
import MapApp from "../components/HookMap";
import database from "../data/db";
import "../App.css";

function Mapa() {
  return (
    <div className="main__container">
      <Navigation />
      <MapApp markers={database} />
    </div>
  );
}

export default Mapa;
