import React from "react";
import FilteredCity from "./FilteredCity";
import { CSSTransition } from "react-transition-group";

const FilteredCitis = props => {
  const items = props.sklepy.map(item => {
    return (
      <FilteredCity key={item.id} item={item} updateModal={props.updateModal} />
    );
  });

  return (
    <div className="filtered__container">
      <CSSTransition
        in={props.toggleBox}
        timeout={500}
        classNames="alert"
        unmountOnExit
      >
        <button
          className="reset__button"
          onClick={() => props.changeToggleBox()}
        >
          {"\u{1F504}"}
        </button>
      </CSSTransition>
      {props.toggleBox && items}
    </div>
  );
};

export default FilteredCitis;
