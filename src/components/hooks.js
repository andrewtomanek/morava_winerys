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

// Google Mapのオブジェクトを呼び出すだけのhooks
export const useGoogleMap = apiKey => {
  const [googleMap, setGoogleMap] = useState(null);
  useEffect(() => {
    GoogleMapsApiLoader({ apiKey }).then(google => {
      setGoogleMap(google);
    });
  }, [apiKey]); // useEffectの第二引数を[]にすることで、初回1回目だけ実行される
  return googleMap;
};

// 実際にMapをDOMにマウントする処理。
export const useMap = ({ googleMap, mapContainerRef, initialConfig }) => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    // googleMapかmapContainerRefが初期化されてなければ何もしない
    if (!googleMap || !mapContainerRef.current) {
      return;
    }
    const map = new googleMap.maps.Map(mapContainerRef.current, initialConfig);
    setMap(map);
    const markersData = database;

    displayMarkers();
    // This function will iterate over markersData array
    // creating markers with createMarker function
    function displayMarkers() {
      // this variable sets the map bounds according to markers position
      let bounds = new googleMap.maps.LatLngBounds();

      // for loop traverses markersData array calling createMarker function for each marker
      markersData.forEach(element => {
        let latlng = new googleMap.maps.LatLng(element.lat, element.lng);
        let name = element.name;
        let picture = element.picture;
        let address = element.address;
        let postalCode = element.postalCode;
        let phoneNumber = element.phoneNumber;
        let website = element.website;
        createMarker(
          latlng,
          name,
          picture,
          address,
          postalCode,
          phoneNumber,
          website
        );
        console.log(element);
        // marker position is added to bounds variable
        bounds.extend(latlng);
      });

      // Finally the bounds variable is used to set the map bounds
      // with fitBounds() function
      map.fitBounds(bounds);
    }
    function createMarker(
      latlng,
      name,
      picture,
      address,
      postalCode,
      phoneNumber,
      website
    ) {
      const marker = new googleMap.maps.Marker({
        position: latlng,
        map: map,
        title: "Hello World!"
      });
      const infoWindow = new googleMap.maps.InfoWindow();

      googleMap.maps.event.addListener(map, "click", function() {
        infoWindow.close();
      });

      googleMap.maps.event.addListener(marker, "click", function() {
        map.setZoom(13);
        map.setCenter(marker.getPosition());
        // Creating the content to be inserted in the infowindow
        let iwContent = `<div class="info_content">  <img
        class="info_picture"
        src=${picture}
        alt=${name}
      /><div class="info_title">${name}</div>
        <div class="info_adress">${address}</div><div class="info_postal">
            ${postalCode}</div>
          <div class="info_telephone">${phoneNumber}</div><div class="info_link">${website}</div></div>`;

        // including content to the Info Window.
        infoWindow.setContent(iwContent);

        // opening the Info Window in the current map and at the current marker location.
        infoWindow.open(map, marker);
      });
    }
  }, [googleMap, initialConfig, mapContainerRef]); // initialConfigは変わったとしても再マウントするとおかしなことになるので更新対象にしない // googleMapかmapContainerRefが変化したらeffectが発火する。

  // あとで使えるようにmapを返すようにする
  return map;
};
