import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CardCurrentLocation from './CardCurrentLocation';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
  userLoc = {
    lat: 0,
    lng: 0
  };
  cardLoc = {
    lat: 0,
    lng: 0
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


  render() {
    const userLoc = {
      lat: "0",
      lng: "0"
    };
    const cardLoc = {
      lat: "0",
      lng: "0"
    }
    if(this.props.user["2"] !== 2 && this.props.user.data !== undefined && this.props.user.data.length) {
      cardLoc.lat = this.props.user.data[0].lat + "";
      cardLoc.lng = this.props.user.data[0].long + "";
    }
    if(this.props.card["2"] !== 2 && this.props.card.data !== undefined && this.props.card.data.length) {
      userLoc.lat= this.props.card.data[0].lat + "";
      userLoc.lng = this.props.card.data[0].long + "";
    }
    console.log("user")
    console.log(userLoc)
    console.log("card")
    console.log(cardLoc)
    return (
      <CardCurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker icon='http://maps.google.com/mapfiles/kml/paddle/blu-circle.png' position={{ lat: userLoc.lat, lng: userLoc.lng }} onClick={this.onMarkerClick} name={'Current Location'} />
        <Marker icon='http://maps.google.com/mapfiles/kml/paddle/purple-circle.png' position={{ lat: cardLoc.lat, lng: cardLoc.lng }} onClick={this.onMarkerClick} name={'Current123 Location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CardCurrentLocation>
    );
  }
}



export default MapContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyCL1e2Z_K6Oz2k6_dBSXmPuAarOVOLWCRE'
})(MapContainer);
