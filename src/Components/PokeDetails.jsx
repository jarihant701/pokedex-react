import React, { useState, useEffect } from "react";
import Name from "./Name";
import Multiplier from "./Multiplier";

const PokeDetails = ({ match }) => {
  const [details, setDetails] = useState({});
  const name = match.params.name;
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const json = await res.json();
        const typeDetails = await fetch(json.types[0].type.url);
        const typejson = await typeDetails.json();
        const flavourTextDetails = await fetch(json.species.url);
        const flavourText = await flavourTextDetails.json();
        let info = {
          sprites: json.sprites,
          name: json.name,
          id: json.id,
          height: json.height,
          weight: json.weight,
          types: json.types,
          ability: json.abilities[0].ability.name,
          multiplier: typejson.damage_relations,
          description: flavourText.flavor_text_entries[0].flavor_text,
        };
        setDetails({ ...info });
      } catch (e) {
        console.log(e);
      }
    }; fetchDetails();
  }, [name]);



  return (
    <div className="bg-div">
      <div className="main-div">
        <div className="img-name-details">
          <img
            src={details?.sprites?.other?.dream_world?.front_default}
            alt=""
          />
          <Name details={details} />
        </div>
        <Multiplier details={details} />
      </div>
    </div>
  );
};

export default PokeDetails;
