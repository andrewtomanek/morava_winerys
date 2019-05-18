import React from "react";
import { useGoogleMap, useMap } from "./MapHooksModal";
import { useRef } from "react";
import database from "../data/db";

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
          width: "70%"
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
        <MapApp />
      </div>
    );
}

export default Modal;
