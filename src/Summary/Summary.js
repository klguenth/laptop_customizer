import React, { Component } from 'react';

export default function Summary(props) {
        const summary = Object.keys(props.features)
        .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{props.features[key].name}</div>
            <div className="summary__option__cost">
            { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(props.features[key].cost) }
            </div>
        </div>)
    const total = Object.keys(props.features)
        .reduce((acc, curr) => acc + props.features[curr].cost, 0); 
    return (
        <div>
            <h3>{props.title}</h3>
                { summary }
            <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(total) }</div>
            </div>
        </div>
    )}