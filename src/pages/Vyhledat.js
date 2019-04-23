import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import database from "../data/db";
import "../App.css";

function Vyhledat() {
  return (
    <div className="app">
      <Navigation />
      <p>Vyhledat</p>
    </div>
  );
}

export default Vyhledat;
