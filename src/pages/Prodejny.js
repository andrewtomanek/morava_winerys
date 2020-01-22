import React, { useState, useEffect } from "react";
import ShopsList from "../components/ShopsList";
import database from "../data/db";
import "../App.css";

function Prodejny() {
  let [initialArray, setInitialArray] = useState([]);
  let [dataIndex, setDataIndex] = useState(16);

  useEffect(() => {
    let startArray = [];
    for (let i = 0; i < 8; i++) {
      startArray.push(database[i]);
    }
    setInitialArray(startArray);
  }, []);

  const displayMore = () => {
    if (database.length < dataIndex) return;
    setDataIndex(dataIndex + 8);
    let updateArray = [];
    for (let i = 0; i < dataIndex; i++) {
      updateArray.push(database[i]);
    }
    setInitialArray(updateArray);
  };

  return (
    <div className="shops__box">
      <ShopsList shops={initialArray} displayMore={displayMore} />
      <div className="more__box">
        <button className="more__button" onClick={() => displayMore()}>
          Zobrazit více
        </button>
      </div>
    </div>
  );
}

export default Prodejny;
