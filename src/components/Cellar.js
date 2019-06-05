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

const Cellar = ({ item }) => {
  return (
    <article className="wine_container">
      <div className="wine_box">
        <h4 className="pic__caption">{item.name}</h4>
        <img
          className="front_picture"
          src={images[item.picture]}
          alt={item.picture}
        />
      </div>
      <div className="content_overlay">
        <h5 className="business_title">{item.name}</h5>
        <div className="business_link">
          <a className="business_website" href={item.url}>
            {item.website}
          </a>
        </div>
        <p className="business_adress">{item.address}</p>
        <p className="business_postal">{item.postalCode}</p>
        <p className="business_telphone">{item.phoneNumber}</p>
      </div>
    </article>
  );
};

export default Cellar;
