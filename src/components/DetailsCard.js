import React from "react";

export default function DetailsCard({ modalContent }) {
  return (
    <div className="modal__box">
      <h5 className="modal__title">{modalContent.name}</h5>
      <a className="modal__website" href={modalContent.url}>
        {modalContent.website}
      </a>
      <p className="modal__row">{modalContent.address}</p>
      <p className="modal__row">{modalContent.postalCode}</p>
      <p className="modal__row">{modalContent.phoneNumber}</p>
    </div>
  );
}
