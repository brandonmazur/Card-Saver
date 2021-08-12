import React, { Component } from 'react';
import { MapContainer } from './MapContainer';
import { CoordinatesDisplayer } from './CoordinatesDisplayer';
import {getLocation} from './GetUserPos';
// import { getParams } from './GetUserPos';
import calculateDistance from './CalculateDist';

let parameters = {"data":{}}

async function attemptBack() {
  const response =  await fetch('/lastCoordinates')
  const body = await response.json()
  return (body)
  // console.log(body.data)
}

let card = attemptBack()
let user = getLocation()
console.log(user)
// console.log(calculateDistance(card,user))

// attemptBack();


export class CardSaver extends React.Component {
    constructor(props) {
      super(props);
      this.state = {lat: "loading", long: "loading"};
    }

    async getLastCoordinates() {
      await fetch("/lastCoordinates").then(res => {
        if(res.ok) {
          return res.json();
        }
      }).then(jsonRes => {
        this.setState({lat: jsonRes.data[0].lat, long:jsonRes.data[0].long})
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
          <MapContainer />
          <CoordinatesDisplayer lat={this.state.lat} long={this.state.long}/>
        </div>
      );
    }
}
