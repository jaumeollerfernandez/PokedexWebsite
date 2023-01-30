import { useState } from "react";
import "./pokemon.css";

export function Pokemon(props) {

    return (
        <div className="pokemonCapsule row">
            <div className="col">
                 <img className="PokemonImage" src={props.image} alt={props.name} />
            </div>
        <div className="row">
            <div className="col">
            <h2 className="PokemonName">{props.name}</h2>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <h3 className="PokemonNumber">{props.number}</h3>
            </div>
        </div>


      </div>
    );
  }
