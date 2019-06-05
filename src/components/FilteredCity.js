import React from "react";

function importAll(r) {
  let images = {};
  r.keys().map(item => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context("../../public/img/cont", false, /\.(png|jpe?g|svg)$/)
);

const FilteredCity = ({ item, updateModal }) => {
  const showModal = cellData => {
    updateModal(cellData);
  };

  return (
    <div className="city_box">
      <h4 className="pic__caption">{item.name}</h4>
      <img
        className="front_picture"
        src={images[item.picture]}
        alt={item.picture}
      />
      <button className="modal__button" onClick={() => showModal(item)}>
        Detail
      </button>
    </div>
  );
};

export default FilteredCity;
