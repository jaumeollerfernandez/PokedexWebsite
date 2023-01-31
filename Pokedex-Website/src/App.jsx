import { useState } from "react";
import "./App.css";
import { Pokemon } from "./components/pokemon";
import { PokemonCard } from "./components/pokemoncard";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  function reproducePokemons(pNumber) {
    var pokemons = [];
    for (let i = 1; i <= pNumber; i++) {
      pokemons.push(
            <PokemonCard number={i} />
      );
    }
    return pokemons;
  }
  return (
    <div className="container d-flex flex-wrap align-items-center">
        {reproducePokemons(3)}
    </div>
  );
}

export default App;
