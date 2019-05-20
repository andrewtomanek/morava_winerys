import { useEffect, useState } from "react";
import GoogleMapsApiLoader from "google-maps-api-loader";
import database from "../data/db";

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

export const useGoogleMap = apiKey => {
  const [googleMap, setGoogleMap] = useState(null);
  useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then(google => {
      setGoogleMap(google);
    });
  }, [apiKey]);
  return googleMap;
};

export const useMap = ({ googleMap, mapContainerRef, initialConfig }) => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (!googleMap || !mapContainerRef.current) {
      return;
    }
    const map = new googleMap.maps.Map(mapContainerRef.current, initialConfig);
    setMap(map);
    const markersData = database;

    displayMarkers();
    function displayMarkers() {
      let bounds = new googleMap.maps.LatLngBounds();

      markersData.forEach(element => {
        let latlng = new googleMap.maps.LatLng(element.lat, element.lng);
        let name = element.name;
        let picture = images[element.picture];
        let address = element.address;
        let postalCode = element.postalCode;
        let phoneNumber = element.phoneNumber;
        let website = element.website;
        let url = element.url;
        createMarker(
          latlng,
          name,
          picture,
          address,
          postalCode,
          phoneNumber,
          website,
          url
        );
        bounds.extend(latlng);
      });
      map.fitBounds(bounds);
    }
    function createMarker(
      latlng,
      name,
      picture,
      address,
      postalCode,
      phoneNumber,
      website,
      url
    ) {
      const marker = new googleMap.maps.Marker({
        position: latlng,
        map: map,
        title: name,
        icon: "../img/cont/marker_blue50x50.png"
      });
      const infoWindow = new googleMap.maps.InfoWindow({
        maxWidth: 300
      });

      googleMap.maps.event.addListener(map, "click", function() {
        infoWindow.close();
      });

      googleMap.maps.event.addListener(marker, "click", function() {
        map.setZoom(13);
        map.setCenter(marker.getPosition());
        let iwContent = `<div class="info__box">  <img
        class="info_picture"
        src=${picture}
        alt=${name}
      /><div class="info_title">${name}</div>
        <div class="info_adress">${address}</div>
        <div class="info_postal">
            ${postalCode}</div>
          <div class="info_telephone">${phoneNumber}</div>
          <div class="info_link">
          <a class="business_website" href="${url}">
          ${website}
</a>
          </div></div>`;
        infoWindow.setContent(iwContent);
        infoWindow.open(map, marker);
      });
    }
  }, [googleMap, initialConfig, mapContainerRef]); // initialConfigは変わったとしても再マウントするとおかしなことになるので更新対象にしない // googleMapかmapContainerRefが変化したらeffectが発火する。

  return map;
};
