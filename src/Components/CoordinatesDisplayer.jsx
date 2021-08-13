import React, { Component } from 'react';

export const CoordinatesDisplayer = (props)  => {
    return (
        <p>Your card is located at {props.lat}°, {props.long}°</p>
    );
}
