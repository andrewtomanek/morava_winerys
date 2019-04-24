import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker
} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
function importAll(r) {
  let images = {};
  r.keys().map(item => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context("../../public/img/cont", false, /\.(png|jpe?g|svg)$/)
);

const MapClustered = props => {
  const [googleMapURL, setGoogleMapURL] = useState(
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyAKAuGeGiFJgClLjhPz6sAm8A9UfMY6MmI"
  );
  const [loadingElement, setLoadingElement] = useState(
    <div style={{ height: `100%` }} />
  );
  const [containerElement, setContainerElement] = useState(
    <div style={{ height: `80vh` }} />
  );
  const [mapElement, setMapElement] = useState(
    <div style={{ height: `100%` }} />
  );
  const [isOpen, seIsOpen] = useState(true);

  const onMarkerClustererClick = markerClusterer => {
    const clickedMarkers = markerClusterer.getMarkers();
    console.log(`Current clicked markers length: ${clickedMarkers.length}`);
    console.log(clickedMarkers);
  };

  const onToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{ lat: 49.0308605, lng: 17.3423464 }}
    >
      <MarkerClusterer
        onClick={onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={60}
      >
        {props.markers.map(marker => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={onToggleOpen}
          >
            {isOpen && (
              <InfoWindow onCloseClick={onToggleOpen}>
                <div className="info_content">
                  <img
                    className="info_picture"
                    src={marker.picture}
                    alt={marker.picture}
                  />
                  <div className="info_title">{marker.name}</div>
                  <div className="info_adress">{marker.address}</div>
                  <div className="info_postal">{marker.postalCode}</div>
                  <div className="info_telephone">{marker.phoneNumber}</div>
                  <div className="info_link">{marker.website}</div>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </MarkerClusterer>
    </GoogleMap>
  );
};

export default MapClustered;
