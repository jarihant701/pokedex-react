import React from "react";
import colours from "./Color";

const Multiplier = ({details}) => {
  return (
    <div className="type-weak-strength">
      <div className="multiplier">
        <h4>Type</h4>
        {details?.types?.map((type, index) => (
          <span
            className="type"
            style={{ backgroundColor: colours[type.type.name] }}
            key={index}
          >
            {type.type.name}
          </span>
        ))}
      </div>
      <div className="multiplier">
        <h4>Weakness</h4>
        {details.multiplier?.double_damage_from?.map((double_damage, index) => {
          return (
            <span
              className="type"
              key={index}
              style={{ backgroundColor: colours[double_damage.name] }}
            >
              {double_damage.name}
            </span>
          );
        })}
      </div>
      <div className="multiplier">
        <h4>Strength</h4>
        {details.multiplier?.double_damage_to?.map((double_damage, index) => {
          return (
            <span
              className="type"
              key={index}
              style={{ backgroundColor: colours[double_damage.name] }}
            >
              {double_damage.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Multiplier;
