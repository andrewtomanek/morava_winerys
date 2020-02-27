import React from "react";

function InputCard({ item, buttonLabel, pickItem }) {
  return (
    <div className="business___box">
      <h5 className="business__title">{item.name}</h5>
      <a className="business__website" href={item.url}>
        {item.website}
      </a>
      <p className="business__adress">{item.address}</p>
      <p className="business__postal">{item.postalCode}</p>
      <p className="business__telephone">{item.phoneNumber}</p>
      <p className="business__text">{item.lat}</p>
      <p className="business__text">{item.lng}</p>
      <p className="business__text">{item.email}</p>

      {buttonLabel && (
        <button onClick={() => pickItem(item)}>{buttonLabel}</button>
      )}
    </div>
  );
}

export default InputCard;
