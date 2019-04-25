import React from "react";

const FilteredCellar = ({ item }) => {
  return (
    <article className="wine_container">
      <div className="wine_box">
        <h4 className="pic_caption">{item.name}</h4>
        <img className="front_picture" src={item.picture} alt={item.picture} />
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
      </div>
    </article>
  );
};

export default FilteredCellar;
