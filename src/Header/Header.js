import React, { Component } from 'react';

export default function Header(props) {
    return (
        <header>
            <h1>{props.h1}</h1>
            <h3>{props.h3}</h3>
            <h5>{props.h5}</h5>  
        </header>    
    )
}