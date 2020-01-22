import React from "react";
import { useGoogleMap, useMap } from "./MapModal";
import { useRef } from "react";
import ModalCard from "./ModalCard";

export default function Modal({ modalContent, closeModal }) {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;

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
  return (
    <div className="modal__wrap">
      <button className="close__button" onClick={() => closeModal()}>
        {"\u{274C}"}
      </button>
      <div className="modal__container">
        <ModalCard modalContent={modalContent} />
        <MapApp />
      </div>
    </div>
  );
}
