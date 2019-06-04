import React from "react";
import FilteredCellar from "./FilteredCellar";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const FilteredList = props => {
  const items = props.sklepy.map(item => {
    return (
      <CSSTransition
        key={item.id}
        appear={true}
        timeout={500}
        classNames="alert"
      >
        <FilteredCellar key={item.id} item={item} />
      </CSSTransition>
    );
  });

  return (
    <TransitionGroup className="search__shops">
      {props.initSklepy && items}
    </TransitionGroup>
  );
};

export default FilteredList;
