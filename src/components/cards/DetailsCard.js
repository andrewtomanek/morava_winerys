import React from "react";
import ImageCard from "./ImageCard";

const DetailsCard = ({ item }) => {
  return (
    <article className="cell__container">
      <div className="cell__box">
        <h4 className="pic__caption">{item.name}</h4>
        <ImageCard item={item} />
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

export default DetailsCard;
