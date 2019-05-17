import React from "react";
import BaseButton from "./BaseButton.js";

function Modal({ modalContent, onClose, show }) {
  const modalOpen = show ? "modalOverlay open" : "modalOverlay closed";
  if (!show) {
    return null;
  } else
    return (
      <div className={modalOpen}>
        <BaseButton name="Close" onClick={onClose} />
        <div className="wine_box">
          <h5 className="business_title">{modalContent.name}</h5>
          <div className="business_link">
            <a className="business_website" href={modalContent.url}>
              {modalContent.website}
            </a>
          </div>
          <p className="business_adress">{modalContent.address}</p>
          <p className="business_postal">{modalContent.postalCode}</p>
          <p className="business_telphone">{modalContent.phoneNumber}</p>
        </div>
      </div>
    );
}

export default Modal;
