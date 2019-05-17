import React from "react";

function Modal({ modalContent, closeModal, modalToggle }) {
  const modalOpen = modalToggle ? "modalOverlay open" : "modalOverlay closed";
  if (!modalToggle) {
    return null;
  } else
    return (
      <div className={modalOpen} onClick={() => closeModal()}>
        <div className="modal_container">
          <button className="modal__button" onClick={() => closeModal()}>
            Close
          </button>
          <h5 className="modal__title">{modalContent.name}</h5>
          <a className="modal__website" href={modalContent.url}>
            {modalContent.website}
          </a>
          <p className="modal__row">{modalContent.address}</p>
          <p className="modal__row">{modalContent.postalCode}</p>
          <p className="modal__row">{modalContent.phoneNumber}</p>
        </div>
      </div>
    );
}

export default Modal;
