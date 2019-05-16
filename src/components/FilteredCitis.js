import React from "react";
import FilteredCity from "./FilteredCity";

const FilteredCitis = props => {
  const items = props.sklepy.map(item => {
    return <FilteredCity key={item.id} item={item} />;
  });

  return (
    <div className="shops__container">
      {props.children}
      {props.toggleBox && items}
    </div>
  );
};

export default FilteredCitis;
