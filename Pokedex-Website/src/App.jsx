import { useState } from "react";
import "./App.css";
import { Pokemon } from "./components/pokemon";
import { PokemonCard } from "./components/pokemoncard";
import { useEffect } from "react";

function App() {

  function reproducePokemons(pNumber) {
    var pokemons = [];
    for (let i = 1; i < pNumber; i++) {
      pokemons.push(<PokemonCard number={i} />);
    }
    return pokemons;
  }
  return (
    <>
      <ul className="container">
        <li>
          <div className="">
            {reproducePokemons(10)}
          </div>
        </li>
      </ul>
    </>
  );
}

export default App;
