import "./App.css";
import { PokemonCard } from "./components/pokemoncard";
import "bootstrap/dist/css/bootstrap.css";
import { PokeNavBar } from './components/NavBar/Pokenavbar'
import { useState } from "react";

function App() {

  const [PokemonNumber, setPokemonNumber] = useState(0)

  function reproducePokemons(pNumber) {
    var pokemons = [];
    for (let i = 1; i <= pNumber; i++) {
      pokemons.push(<PokemonCard number={i} />);
    }
    return pokemons;
  }

  function getNumberData(data){
    console.log(data)
    setPokemonNumber(data)
  }

  return (
    <div>
      <div className="row">
        <div className="col">
          <PokeNavBar getNumberData={getNumberData}/>
        </div>
      </div>
      <div className="container d-flex flex-wrap align-items-center">
        {reproducePokemons(PokemonNumber)}
      </div>
    </div>
  );
}

export default App;
