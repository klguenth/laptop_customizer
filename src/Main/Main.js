import React, { Component } from 'react';
import Feature from '../Feature/Feature.js';

export default function Main(props) {
    const features = Object.keys(props.features).map(key => {
        return (
            <Feature features={props.features} feature={key} selected={props.selected} />
        )
    });

    return (
        <div>
            <h3>{props.title}</h3>
            {features}
        </div>
    )
}
