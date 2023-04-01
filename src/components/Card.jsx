import React from "react";
    
export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} />
            <h3 className="color-yellow">{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}