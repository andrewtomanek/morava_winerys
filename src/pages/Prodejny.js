import React, { useState } from "react";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import ShopsList from "../components/ShopsList";
import database from "../data/db";
import "../App.css";

function Prodejny() {
  return (
    <div className="app">
      <Navigation />
      <p>Prodejny</p>
      <ShopsList shops={database} />
    </div>
  );
}

export default Prodejny;
