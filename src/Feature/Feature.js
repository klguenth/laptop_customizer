import React, { Component } from 'react';

export default function Feature(props) {
    const options = props.features[props.feature].map((item, index) => {
        const selectedClass = item.name === props.selected[props.feature].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return (
            <li key={index} className="feature__item">
                <div className={featureClass}
                    onClick={e => props.updateFeature(props.feature, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(item.cost) })
                </div>
            </li>
        )
    });

    return (
        <div className="feature" key={props.feature}>
            <div className="feature__name">{props.feature}</div>
            <ul className="feature__list">
                { options }
            </ul>
        </div>
    );
}  
