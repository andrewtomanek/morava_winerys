import React from "react";

function InputCard({ item, buttonLabel, pickItem }) {
  return (
    <div className="card__box">
      <h5 className="card__title">{item.name}</h5>
      <a className="card__text" href={item.url}>
        {item.website}
      </a>
      <p className="card__text">{item.address}</p>
      <p className="card__text">{item.postalCode}</p>
      <p className="card__text">{item.phoneNumber}</p>
      <p className="card__text">{item.lat}</p>
      <p className="card__text">{item.lng}</p>
      <p className="card__text">{item.email}</p>

      {buttonLabel && (
        <button className="upload__button" onClick={() => pickItem(item)}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
}

export default InputCard;
