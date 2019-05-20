import React from "react";
import { useGoogleMap, useMap } from "./MapHooks";
import { useRef } from "react";

const API_KEY = "AIzaSyAKAuGeGiFJgClLjhPz6sAm8A9UfMY6MmI";

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
