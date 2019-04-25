import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(props, marker, e);
  };

  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const style = {
      width: "100vw",
      height: "75vh",
      marginLeft: "auto",
      marginRight: "auto"
    };

    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={9}
        initialCenter={{ lat: 49.0308605, lng: 17.3423464 }}
      >
        {this.props.markers.map(marker => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={this.onMarkerClick}
            title={"Changing Colors Garage"}
            name={"Changing Colors Garage"}
          >
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
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
                {console.log(
                  this.state.activeMarker,
                  this.state.showingInfoWindow
                )}
              </div>
            </InfoWindow>
          </Marker>
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAKAuGeGiFJgClLjhPz6sAm8A9UfMY6MmI"
})(GoogleMapsContainer);
