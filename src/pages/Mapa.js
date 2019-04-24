import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import MapWithAMarkerClusterer from "../components/MapWithAMarkerClusterer";
import database from "../data/db";
import "../App.css";

function Mapa() {
  return (
    <div className="app">
      <Navigation />
      <MapWithAMarkerClusterer markers={database} />
    </div>
  );
}

export default Mapa;
