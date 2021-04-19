import React from "react";

const Name = ({ details }) => {
  return (
    <div className="name-details">
      <h2>
        {details?.name} #{details.id}
      </h2>
      <p>{details.description}</p>
      <div className="info">
        Height <strong>{details.height / 10}m</strong> &nbsp; Weight{" "}
        <strong>{details.weight / 10}kg</strong> <br /> Ability{" "}
        <strong>{details.ability}</strong>
      </div>
    </div>
  );
};

export default Name;
