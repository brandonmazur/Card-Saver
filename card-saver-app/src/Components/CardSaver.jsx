import React, { Component } from 'react';
import { MapContainer } from './MapContainer';
import { CoordinatesDisplayer } from './CoordinatesDisplayer';

export class CardSaver extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: "loading", long: "loading" };
  }

  async getLastCoordinates() {
    await fetch('http://card-saver.herokuapp.com/lastCoordinates').then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(jsonRes => {
      this.setState({ lat: jsonRes.data[0].lat, long: jsonRes.data[0].long })
    })
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.getLastCoordinates(),
      5000 //update coordinates every 5 seconds
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval); //clear interval to prevent memory leaks
  }

  render() {
    return (
      <div>
        {/*<h2>Your card's location as of {this.state.date.toLocaleTimeString()}</h2>*/}
        <MapContainer lat={this.state.lat} long={this.state.long} />
        <CoordinatesDisplayer lat={this.state.lat} long={this.state.long} />
      </div>
    );
  }
}
