import React from "react";
import City from "./City";

const CityList = props => {
  const items = props.citis.map(item => {
    return <City key={item} item={item} pickItem={props.pickItem} />;
  });
  return <div className="citis__box">{items}</div>;
};

export default CityList;
