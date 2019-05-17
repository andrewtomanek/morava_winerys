import React from "react";

const FilteredCity = ({ item, updateModal }) => {
  const showModal = cellData => {
    updateModal(cellData);
  };

  return (
    <div className="wine_box">
      <h4 className="pic_caption">{item.name}</h4>
      <img className="front_picture" src={item.picture} alt={item.picture} />
      <button className="modal__button" onClick={() => showModal(item)}>
        Details
      </button>
    </div>
  );
};

export default FilteredCity;
