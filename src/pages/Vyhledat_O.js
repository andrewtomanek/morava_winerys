import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import database from "../data/db";
import "../App.css";

import Form from "../components/Form";
import People from "../components/People";
import NewestPerson from "../components/NewestPerson";

const Vyhledat = () => {
  const [people, setPeople] = useState(database);
  const addPerson = person => {
    setPeople([...people, person]);
  };

  return (
    <div className="main__container">
      <Navigation />

      <Form addPerson={addPerson} />
      <People people={people} />
      <NewestPerson newestPerson={people[people.length - 1]} />
    </div>
  );
};

export default Vyhledat;
