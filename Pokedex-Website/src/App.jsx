import "./App.css";
import { PokemonCard } from "./components/pokemoncard";
import "bootstrap/dist/css/bootstrap.css";
import { PokeNavBar } from "./components/NavBar/Pokenavbar";
import { useState } from "react";
import Favicon from "react-favicon";

function App() {
  const [PokemonNumber, setPokemonNumber] = useState(1);
  const [PokemonName, setPokemonName] = useState("");

  function getPokemonName(data) {
    setPokemonName(data);
  }

  function SearchPokemon() {
    // if(PokemonNumber !== 0 || PokemonNumber !== ""){
    //   var pokemons = [];
    //   pokemons.push(<PokemonCard name={PokemonName} />);
    //   return pokemons;
    // }
  }

  function reproducePokemons() {
    var pokemons = [];
    console.log("reproducePokemons")
    console.log(PokemonNumber)
    console.log(PokemonName)

    if (PokemonNumber === 0 && PokemonName === "")
      return (
        <div className="col-12 text-center">
          <h1 className="text-center">
            Please select a number or write a name
          </h1>
        </div>
      );

    if (PokemonNumber > 898) {
      return (
        <div className="col-12 text-center">
          <h1 className="text-center">
            Please select a number between 1 and 898
          </h1>
        </div>
      );
    }

    if(PokemonName != ""){
      pokemons.push(<PokemonCard number={PokemonName} />);
    }else{
      for (let i = 1; i < PokemonNumber; i++) {
        if(PokemonNumber > 1){
          pokemons.push(<PokemonCard number={i} />);
        }
    }
    
    }
    return pokemons;
  }

  function getNumberData(data) {
    console.log(data);
    setPokemonNumber(data);
  }

  return (
    <div>
      {/* <Favicon href="./src/assets/favicon.ico"></Favicon> */}
      <div className="row">
        <div className="col">
          <PokeNavBar
            getNumberData={getNumberData}
            getPokemonName={getPokemonName}
          />
        </div>
      </div>
      <div
        id="PokemoncontainerNumber"
        className="container d-flex flex-wrap align-items-center"
      >
        {reproducePokemons()}
      </div>
      <div
        id="PokemoncontainerText"
        className="container d-flex flex-wrap align-items-center"
      >
      </div>
    </div>
  );
}

export default App;
