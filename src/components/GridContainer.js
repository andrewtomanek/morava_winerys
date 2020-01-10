import React, { useState } from "react";
import ModalContainer from "../components/ModalContainer.js";
import CardBox from "./CardBox";
import { CSSTransition } from "react-transition-group";
import citis from "../data/citis";
import "../App.css";
import CityList from "./CityList";
import database from "../data/db";

export default function GridContainer() {
  const [filteredSklepy, setfilteredSklepy] = useState([]);
  const [toggleBox, setToggleBox] = useState(false);
  const [show, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(false);

  const pickItem = query => {
    let filtered = database.filter(item => {
      return item.postalCode.toLowerCase().indexOf(query) > -1;
    });
    setToggleBox(true);
    if (filtered.length === 0) setToggleBox(false);
    setfilteredSklepy(filtered);
  };

  const changeToggleBox = () => {
    setToggleBox(!toggleBox);
  };

  const updateModal = content => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    setOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <ModalContainer
        modalContent={modalContent}
        modalToggle={show}
        closeModal={closeModal}
        onClick={() => closeModal()}
      />
      <CSSTransition
        in={toggleBox}
        timeout={500}
        classNames="alert"
        unmountOnExit
      >
        <CardBox
          toggleBox={toggleBox}
          sklepy={filteredSklepy}
          changeToggleBox={changeToggleBox}
          updateModal={updateModal}
        />
      </CSSTransition>
      {!toggleBox && <CityList citis={citis} pickItem={pickItem} />}
    </>
  );
}
