import React from "react";
import ImageCard from "./ImageCard";

const BusinessCard = ({ item, updateModal }) => {
  const showModal = cellData => {
    updateModal(cellData);
  };

  return (
    <div className="city_box">
      <ImageCard item={item} />
      <h4 className="pic__caption">{item.name}</h4>
      <button className="modal__button" onClick={() => showModal(item)}>
        Detail
      </button>
    </div>
  );
};

export default BusinessCard;
