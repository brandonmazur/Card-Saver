import React, { useEffect, useState } from 'react';
import { MapContainer } from './MapContainer';
import { CoordinatesDisplayer } from './CoordinatesDisplayer';
import calculateDistance from './CalculateDist';


async function attemptBack() {
  const response =  await fetch('https://card-saver.herokuapp.com/lastCoordinates')
  const body = await response.json()
  return body
}

export function CardSaver() {
  const [lat, setLat] = useState("loading");
  const [long, setLong] = useState("loading");
  const [card, setCard] = useState({"1": 1});
  const [user, setUser] = useState({"2": 2});
  
  function checkCard() {
    if(card["1"] !== 1 && user["2"] !== 2 && card.data !== null && user.data !== null && card.data.length > 0 && user.data.length) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    setInterval(() => {
      fetch("https://card-saver.herokuapp.com/lastCoordinates").then(res => {
        if(res.ok) {
          return res.json();
        }
      }).then(jsonRes => {
        try {
          setLat(jsonRes.data[0].lat);
          setLong(jsonRes.data[0].long);
          setCard(jsonRes)
        } catch(e) {
          console.log(e);
        }
      })
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((loc) => {
          setUser({"data":[{"lat": loc.coords.latitude, "long": loc.coords.longitude}]});
        });
      } else {
        console.log("Geolocation is not supported by this browser.")
      }
    }, 3000) // every 3 seconds, maybe more?
  }, [])
  useEffect(() => {
    if(checkCard()) {
      // console.log("VALUES")
      // console.log("user")
      // console.log(user);
      // console.log("card")
      // console.log(card)
      // console.log(calculateDistance(card, user));
      // PUT STUFF HERE
    }
  }, [user])
  useEffect(() => {
    if(checkCard()) {
      // console.log("VALUES")
      // console.log("user")
      // console.log(user);
      // console.log("card")
      // console.log(card)
      // console.log(calculateDistance(card, user));
      // PUT STUFF HERE
    }
  }, [card])
  return (
    <div>
      {/*<h2>Your card's location as of {this.state.date.toLocaleTimeString()}</h2>*/}
      <MapContainer user={user} card={card}/>
      <CoordinatesDisplayer lat={lat} long={long}/>
    </div>
  );
}
