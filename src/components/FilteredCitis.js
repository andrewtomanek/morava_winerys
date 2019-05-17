import React from "react";
import FilteredCity from "./FilteredCity";

const FilteredCitis = props => {
  const items = props.sklepy.map(item => {
    return (
      <FilteredCity key={item.id} item={item} updateModal={props.updateModal} />
    );
  });

  return (
    <div className="shops__container">
      {props.toggleBox && (
        <button
          className="reset__button"
          onClick={() => props.changeToggleBox()}
        >
          Reset
        </button>
      )}
      {props.toggleBox && items}
    </div>
  );
};

export default FilteredCitis;
