import React from "react";
import { useGoogleMap, useMap } from "./GoogleMap";
import { useRef } from "react";

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY;
const initialConfig = {
  zoom: 12,
  mapTypeId: "roadmap",
  center: { lat: 49.0308605, lng: 17.3423464 }
};
export const MapApp = () => {
  const googleMap = useGoogleMap(API_KEY);
  const mapContainerRef = useRef(null);
  useMap({ googleMap, mapContainerRef, initialConfig });
  return <div className="map__container" ref={mapContainerRef} />;
};

export default MapApp;
