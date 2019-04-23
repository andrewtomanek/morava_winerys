import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import MyMapComponent from "../components/MyMapComponent";
import database from "../data/db";
import "../App.css";

function Mapa() {
  return (
    <div className="app">
      <Navigation />
      <p>Mapa</p>
      <MyMapComponent isMarkerShown />
    </div>
  );
}

export default Mapa;
