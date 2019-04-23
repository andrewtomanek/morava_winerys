  // necessary letiables HideHrad
let map;
let infoWindow;
// markersData variable stores the information necessary to each marker

let markersData = data;

function initialize() {
   let mapOptions = {
      center: new google.maps.LatLng(49.0308605,17.3423464),
      zoom: 9,
      mapTypeId: 'roadmap',
   };

   map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

   // a new Info Window is created
   infoWindow = new google.maps.InfoWindow();

   // Event that closes the Info Window with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
   displayMarkers();
}
google.maps.event.addDomListener(window, 'load', initialize);


// This function will iterate over markersData array
// creating markers with createMarker function
function displayMarkers(){

   // this variable sets the map bounds according to markers position
   let bounds = new google.maps.LatLngBounds();
   
   // for loop traverses markersData array calling createMarker function for each marker 
   for (let i = 0; i < markersData.length; i++){

      let latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      let name = markersData[i].name;
      let picture = markersData[i].picture;
      let address = markersData[i].address;
      let postalCode = markersData[i].postalCode;
      let phoneNumber = markersData[i].phoneNumber;
      let website = markersData[i].website;
      createMarker(latlng, name, picture, address, postalCode, phoneNumber, website);

      // marker position is added to bounds variable
      bounds.extend(latlng);  
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

// This function creates each marker and it sets their Info Window content
function createMarker(latlng, name, picture, address, postalCode, phoneNumber, website){
   let marker = new google.maps.Marker({
      map: map,
      position: latlng,
      icon:'marker_blue50x50.png',
        title: name
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
   google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(13);
  map.setCenter(marker.getPosition());
      // Creating the content to be inserted in the infowindow
      let iwContent = `<div class="info_content">${picture}<div class="info_title">${name}</div>
      <div class="info_adress">${address}</div><div class="info_postal">
          ${postalCode}</div>
        <div class="info_telephone">${phoneNumber}</div><div class="info_link">${website}</div></div>`;
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });
}
