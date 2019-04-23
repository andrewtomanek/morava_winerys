import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import database from "../data/db";
import "../App.css";

function Domu() {
  return (
    <div className="app">
      <Navigation />
      <p>Domu</p>
    </div>
  );
}

export default Domu;
