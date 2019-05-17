import React, { useState } from "react";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import database from "../data/db";
import citis from "../data/citis";
import "../App.css";
import CityList from "../components/CityList";
import FilteredCitis from "../components/FilteredCitis";

const Vyhledat = () => {
  const [filteredSklepy, setfilteredSklepy] = useState([]);
  const [toggleBox, setToggleBox] = useState(false);
  const [initLocations, setInitLocations] = useState(citis);
  const [searchString, setSearchString] = useState("");
  //const [initOkres, setInitOkres] = useState(["Břeclav", "Uherské Hradiště"]);

  const pickItem = query => {
    setSearchString(query.toLowerCase());
    let filtered = database.filter(item => {
      return item.postalCode.toLowerCase().indexOf(query) > -1;
    });
    console.log(filtered);
    setToggleBox(true);
    if (filtered.length === 0) setToggleBox(false);
    setfilteredSklepy(filtered);
  };

  return (
    <div className="main__container">
      <Navigation />
      {toggleBox && (
        <button onClick={() => setToggleBox(!toggleBox)}>Reset</button>
      )}
      {toggleBox && (
        <FilteredCitis sklepy={filteredSklepy} toggleBox={toggleBox} />
      )}
      {!toggleBox && <CityList citis={initLocations} pickItem={pickItem} />}
    </div>
  );
};

export default Vyhledat;
