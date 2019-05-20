import React from "react";
import Cellar from "./Cellar";

const ShopsList = props => {
  const items = props.shops.map(item => {
    return <Cellar key={item.id} item={item} />;
  });

  return <div className="shops__container">{items}</div>;
};

export default ShopsList;
