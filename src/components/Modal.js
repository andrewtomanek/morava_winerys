import React from "react";
import { useGoogleMap, useMap } from "./MapHooksModal";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

function Modal({ modalContent, closeModal, modalToggle }) {
  const API_KEY = "AIzaSyAKAuGeGiFJgClLjhPz6sAm8A9UfMY6MmI";

  const initialConfig = {
    zoom: 10,
    mapTypeId: "roadmap",
    center: { lat: modalContent.lat, lng: modalContent.lng }
  };

  const MapApp = () => {
    const markerData = { lat: modalContent.lat, lng: modalContent.lng };
    const googleMap = useGoogleMap(API_KEY);
    const mapContainerRef = useRef(null);
    useMap({ googleMap, mapContainerRef, initialConfig, markerData });
    return <div className="modal__map" ref={mapContainerRef} />;
  };

  /*   const modalOpen = modalToggle
    //? "modal__overlay open"
    : "modal__overlay closed";
  if (!modalToggle) {
    return null;
  } else */
  return (
    <CSSTransition
      in={modalToggle}
      timeout={500}
      classNames="alert"
      unmountOnExit
    >
      <div className="modal__overlay open">
        <div className="modal__wrap">
          <button className="close__button" onClick={() => closeModal()}>
            {"\u{274C}"}
          </button>
          <div className="modal__container">
            <div className="modal__box">
              <h5 className="modal__title">{modalContent.name}</h5>
              <a className="modal__website" href={modalContent.url}>
                {modalContent.website}
              </a>
              <p className="modal__row">{modalContent.address}</p>
              <p className="modal__row">{modalContent.postalCode}</p>
              <p className="modal__row">{modalContent.phoneNumber}</p>
            </div>
            <MapApp />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
