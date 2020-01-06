import React from 'react'
import { useGoogleMap, useMap } from "./MapModal";
import { useRef } from "react";
import DetailsCard from "./DetailsCard"

export default function Modal({modalContent,closeModal}) {
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
  return (
    <div className="modal__wrap">
    <button className="close__button" onClick={() => closeModal()}>
      {"\u{274C}"}
    </button>
    <div className="modal__container">
    <DetailsCard modalContent={modalContent}/>
      <MapApp />
    </div>
  </div>
  )
}
