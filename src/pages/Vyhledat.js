import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import database from "../data/db";

import Form from "../components/forms/Form";
import Shops from "../components/Shops";
import FilteredList from "../components/FilteredList";

const Vyhledat = () => {
  const [sklepy, setSklepy] = useState(database);
  const [initSklepy, setInitSklepy] = useState(false);

  const searchDatabase = (searchString) => {
    let filtered = sklepy.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
        item.postalCode.toLowerCase().indexOf(searchString.toLowerCase()) >
          -1 ||
        item.address.toLowerCase().indexOf(searchString.toLowerCase()) > -1
      );
    });
    setInitSklepy(true);
    if (filtered.length === 0) setInitSklepy(false);
    if (filtered.length > 20) setInitSklepy(false);
    setSklepy(filtered);
  };

  const resetSearch = () => {
    setInitSklepy(false);
    setSklepy(database);
  };

  return (
    <div className="search__wrap">
      <Form searchDatabase={searchDatabase} resetSearch={resetSearch} />
      <CSSTransition
        in={!initSklepy}
        timeout={500}
        classNames="alert"
        unmountOnExit
      >
        <Shops sklepy={sklepy} initSklepy={!initSklepy} />
      </CSSTransition>
      <CSSTransition
        in={initSklepy}
        timeout={500}
        classNames="alert"
        unmountOnExit
      >
        <FilteredList sklepy={sklepy} initSklepy={initSklepy} />
      </CSSTransition>
    </div>
  );
};

export default Vyhledat;
