import { useEffect, useState } from "react";
import GoogleMapsApiLoader from "google-maps-api-loader";

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
    const marker = new googleMap.maps.Marker({
      position: { lat: 49.0308605, lng: 17.3423464 },
      map: map,
      title: "Hello World!"
    });
    const infoWindow = new googleMap.maps.InfoWindow();

    googleMap.maps.event.addListener(marker, "click", function() {
      map.setZoom(13);
      map.setCenter(marker.getPosition());
      // Creating the content to be inserted in the infowindow
      let iwContent = `<div class="info_content">text</div>`;

      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
    });
  }, [googleMap, initialConfig, mapContainerRef]); // initialConfigは変わったとしても再マウントするとおかしなことになるので更新対象にしない // googleMapかmapContainerRefが変化したらeffectが発火する。

  // あとで使えるようにmapを返すようにする
  return map;
};
