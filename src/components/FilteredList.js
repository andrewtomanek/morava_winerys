import React from "react";
import DetailsCard from "./cards/DetailsCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const FilteredList = (props) => {
  const items = props.sklepy.map((item) => {
    return (
      <CSSTransition
        key={item.id}
        appear={true}
        timeout={500}
        classNames="alert"
      >
        <DetailsCard key={item.id} item={item} />
      </CSSTransition>
    );
  });

  return (
    <TransitionGroup className="shops__container search__list">
      {props.initSklepy && items}
    </TransitionGroup>
  );
};

export default FilteredList;
