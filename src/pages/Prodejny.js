import React, { useState, useEffect } from "react";

//import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import ShopsList from "../components/ShopsList";
import database from "../data/db";
import "../App.css";

function Prodejny() {
  let [initialArray, setInitialArray] = useState([]);
  let [dataIndex, setDataIndex] = useState(8);
  const displayMore = () => {
    if (database.length < dataIndex) return;
    setDataIndex(dataIndex + 8);
    let updateArray = [];
    for (let i = 0; i < dataIndex; i++) {
      updateArray.push(database[i]);
    }
    setInitialArray(updateArray);
  };
  console.log(initialArray);

  return (
    <div className="main__container">
      <Navigation />
      <div className="shops__box">
        <div className="more__box">
          <button className="more__button" onClick={() => displayMore()}>
            More
          </button>
        </div>
        <ShopsList shops={initialArray} displayMore={displayMore} />
      </div>
    </div>
  );
}

export default Prodejny;
