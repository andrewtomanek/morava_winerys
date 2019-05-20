import React from "react";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import ShopsList from "../components/ShopsList";
import database from "../data/db";
import "../App.css";

function Prodejny() {
  return (
    <div className="main__container">
      <Navigation />
      <ShopsList shops={database} />
    </div>
  );
}

export default Prodejny;
