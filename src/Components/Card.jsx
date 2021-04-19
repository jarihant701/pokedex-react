import React from "react";
import colours from './Color';

const Card = (props) => {

  return (
    <div className="pokemon-card">
      <img src={props.imgSrc} alt="" />
      <span className="number">#{props.number}</span>
      <h4 className="pokemon-name">{props.name}</h4>
      <div className="type-div">
        {props.types.map((type) => (
          <span className="type" key={type.slot} style={{backgroundColor: colours[type.type.name]}}>{type.type.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Card;
