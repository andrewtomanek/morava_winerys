import { useEffect, useState } from "react";
import GoogleMapsApiLoader from "google-maps-api-loader";

export const useGoogleMap = apiKey => {
  const [googleMap, setGoogleMap] = useState(null);
  useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then(google => {
      setGoogleMap(google);
    });
  }, [apiKey]);
  return googleMap;
};

export const useMap = ({
  googleMap,
  mapContainerRef,
  initialConfig,
  markerData
}) => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (!googleMap || !mapContainerRef.current) {
      return;
    }
    const map = new googleMap.maps.Map(mapContainerRef.current, initialConfig);
    setMap(map);

    displayMarkers();
    function displayMarkers() {
      let bounds = new googleMap.maps.LatLngBounds();
      let latlng = new googleMap.maps.LatLng(markerData.lat, markerData.lng);

      createMarker(latlng);
      bounds.extend(latlng);

      map.fitBounds(bounds);
      function createMarker(latlng) {
        let marker = new googleMap.maps.Marker({
          position: latlng,
          map: map,
          title: "Hello World!",
          icon: "../img/cont/marker_blue50x50.png"
        });
      }
    }
  }, [
    googleMap,
    mapContainerRef,
    initialConfig,
    markerData.lat,
    markerData.lng
  ]);

  return map;
};
