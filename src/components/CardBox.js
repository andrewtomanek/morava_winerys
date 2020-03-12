import React from "react";
import BusinessCard from "./cards/BusinessCard";
import { CSSTransition } from "react-transition-group";

const CardBox = props => {
  const items = props.sklepy.map(item => {
    return (
      <BusinessCard key={item.id} item={item} updateModal={props.updateModal} />
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
      {items}
    </div>
  );
};

export default CardBox;
