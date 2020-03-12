import React from "react";
import City from "./City";

const CityList = props => {
  return (
    <div className="citis__box">
      {props.citis.map(item => (
        <City key={item} item={item} pickItem={props.pickItem} />
      ))}
    </div>
  );
};

export default CityList;
