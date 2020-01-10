import React from "react";
import DetailsCard from "./DetailsCard";

const ShopsList = props => {
  const items = props.shops.map(item => {
    return <DetailsCard key={item.id} item={item} />;
  });

  return <div className="shops__container">{items}</div>;
};

export default ShopsList;
