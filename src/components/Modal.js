import React from "react";
import { useGoogleMap, useMap } from "./MapHooksModal";
import { useRef } from "react";

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
    return (
      <div
        style={{
          height: "70vh",
          width: "100%"
        }}
        ref={mapContainerRef}
      />
    );
  };

  const modalOpen = modalToggle ? "modalOverlay open" : "modalOverlay closed";
  if (!modalToggle) {
    return null;
  } else
    return (
      <div className={modalOpen}>
        <div className="modal__wrap">
          <button className="modal__button" onClick={() => closeModal()}>
            X
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
    );
}

export default Modal;
