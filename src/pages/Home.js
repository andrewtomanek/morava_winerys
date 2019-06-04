import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import database from "../data/db";
import citis from "../data/citis";
import "../App.css";
import CityList from "../components/CityList";
import FilteredCitis from "../components/FilteredCitis";
import Modal from "../components/Modal.js";
import { CSSTransition } from "react-transition-group";

const Vyhledat = () => {
  const [filteredSklepy, setfilteredSklepy] = useState([]);
  const [toggleBox, setToggleBox] = useState(false);
  const [initLocations, setInitLocations] = useState(citis);
  const [searchString, setSearchString] = useState("");
  const [show, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(false);

  const pickItem = query => {
    setSearchString(query.toLowerCase());
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
    <div className="main__container">
      <Navigation />
      <Modal
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
        <FilteredCitis
          sklepy={filteredSklepy}
          changeToggleBox={changeToggleBox}
          toggleBox={toggleBox}
          updateModal={updateModal}
        />
      </CSSTransition>
      {!toggleBox && <CityList citis={initLocations} pickItem={pickItem} />}
      <Footer />
    </div>
  );
};

export default Vyhledat;
