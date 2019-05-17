import React, { useState } from "react";
import Modal from "./Modal.js";
import BaseButton from "./BaseButton.js";

const FilteredCity = ({ item }) => {
  const [show, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const showModal = e => {
    setOpen(true);
    setModalContent(item);
  };

  return (
    <div className="wine_box">
      <h4 className="pic_caption">{item.name}</h4>
      <img className="front_picture" src={item.picture} alt={item.picture} />
      <BaseButton onClick={() => showModal()} />
      <Modal
        onClose={() => setOpen(false)}
        show={show}
        modalContent={modalContent}
      />
    </div>
  );
};

export default FilteredCity;
