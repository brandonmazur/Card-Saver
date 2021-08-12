import React, { Component } from 'react';

export const CoordinatesDisplayer = (props)  => {
    return (
        <p>{props.lat}, {props.long}</p>
    );
}
