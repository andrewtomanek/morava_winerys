import React, { useState } from "react";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import database from "../data/db";
import "../App.css";

import Form from "../components/Form";
import Shops from "../components/Shops";
import FilteredList from "../components/FilteredList";

const Vyhledat = () => {
  const [sklepy, setSklepy] = useState(database);
  const [initSklepy, setInitSklepy] = useState(false);

  const searchDatabase = searchString => {
    let filtered = sklepy.filter(item => {
      return (
        item.name.toLowerCase().indexOf(searchString) > -1 ||
        item.postalCode.toLowerCase().indexOf(searchString) > -1 ||
        item.address.toLowerCase().indexOf(searchString) > -1
      );
    });
    setInitSklepy(true);
    if (filtered.length === 0) setInitSklepy(false);
    setSklepy(filtered);
  };

  const resetSearch = () => {
    setInitSklepy(false);
    setSklepy(database);
  };

  return (
    <div className="main__container">
      <Navigation />
      <div className="page__container">
        <Form searchDatabase={searchDatabase} resetSearch={resetSearch} />
        {!initSklepy && <Shops sklepy={sklepy} initSklepy={!initSklepy} />}
        {initSklepy && <FilteredList sklepy={sklepy} initSklepy={initSklepy} />}
      </div>
    </div>
  );
};

export default Vyhledat;
