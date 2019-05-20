import React from "react";
import FilteredCellar from "./FilteredCellar";

const FilteredList = props => {
  const items = props.sklepy.map(item => {
    return <FilteredCellar key={item.id} item={item} />;
  });

  return (
    <div className="search__shops">
      {props.children}
      {props.initSklepy && items}
    </div>
  );
};

export default FilteredList;
