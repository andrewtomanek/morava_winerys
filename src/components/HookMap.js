import React from "react";
import ReactDOM from "react-dom";
import { useGoogleMap, useMap } from "./hooks";
import { useRef } from "react";

const API_KEY = "AIzaSyAKAuGeGiFJgClLjhPz6sAm8A9UfMY6MmI";

const initialConfig = {
  zoom: 12,
  mapTypeId: "roadmap",
  center: { lat: 49.0308605, lng: 17.3423464 }
};
// hookを利用して表示するコンポーネント
export const MapApp = () => {
  const googleMap = useGoogleMap(API_KEY);
  const mapContainerRef = useRef(null);
  useMap({ googleMap, mapContainerRef, initialConfig });
  return (
    <div
      style={{
        // ホントはstyled-componentsとかで良いのだけど簡略化
        height: "100vh",
        width: "100%"
      }}
      ref={mapContainerRef}
    />
  );
};

export default MapApp;
