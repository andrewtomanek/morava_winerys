import React from "react";
import FilteredCity from "./FilteredCity";

const FilteredCitis = props => {
  const items = props.sklepy.map(item => {
    return (
      <FilteredCity key={item.id} item={item} updateModal={props.updateModal} />
    );
  });

  return (
    <div className="filtered__container">
      {props.toggleBox && (
        <button
          className="reset__button"
          onClick={() => props.changeToggleBox()}
        >
          {"\u{1F504}"}
        </button>
      )}
      {props.toggleBox && items}
    </div>
  );
};

export default FilteredCitis;
