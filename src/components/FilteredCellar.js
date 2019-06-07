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

const FilteredCellar = ({ item }) => {
  return (
    <article className="wine__container">
      <div className="wine__box">
        <img
          className="front__picture"
          src={images[item.picture]}
          alt={item.picture}
        />
        <h4 className="pic__caption">{item.name}</h4>
      </div>
      <div className="content__overlay">
        <h5 className="business__title">{item.name}</h5>
        <div className="business__link">
          <a className="business__website" href={item.url}>
            {item.website}
          </a>
        </div>
        <p className="business__adress">{item.address}</p>
        <p className="business__postal">{item.postalCode}</p>
        <p className="business__telphone">{item.phoneNumber}</p>
      </div>
    </article>
  );
};

export default FilteredCellar;
