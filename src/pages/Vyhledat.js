import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import database from "../data/db";
import "../App.css";

import Form from "../components/Form";
import Shops from "../components/Shops";

const Vyhledat = () => {
  const [sklepy, setSklepy] = useState(database);

  const searchDatabase = searchString => {
    let keyword = searchString;
    let filtered = sklepy.filter(item => {
      return (
        item.name.toLowerCase().indexOf(keyword) > -1 ||
        item.postalCode.toLowerCase().indexOf(keyword) > -1 ||
        item.address.toLowerCase().indexOf(keyword) > -1
      );
    });
    console.log(searchString);
    console.log(filtered);
    setSklepy(filtered);
  };

  const resetSearch = () => {
    setSklepy(database);
    console.log(sklepy);
  };

  return (
    <div className="row">
      <Navigation />
      <Form searchDatabase={searchDatabase} resetSearch={resetSearch} />
      <Shops sklepy={sklepy} />
    </div>
  );
};

export default Vyhledat;
