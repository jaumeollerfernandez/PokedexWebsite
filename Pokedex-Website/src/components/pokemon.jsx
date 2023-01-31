import { useState } from "react";
import "./pokemon.css";

export function Pokemon(props) {

    const BrokenImage = (ev)=>{
        ev.target.src = './src/assets/default.png';
    } 


    return (
        <div className="m-2 card" style={{backgroundColor: props.color}} >
            <img className="card-img-top" onError={BrokenImage} src={props.image} 
            alt={props.name} />

            <div className="card-body text-center">
            <h2 className="PokemonName">{props.name}</h2>
            </div>

        <div className="card-text">
            <div className="col text-center">
            <h3 className="PokemonNumber">{props.number}</h3>
            </div>
        </div>
      </div>
    );
  }
