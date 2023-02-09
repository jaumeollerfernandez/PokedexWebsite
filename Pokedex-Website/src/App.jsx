import "./App.css";
import { PokemonCard } from "./components/pokemoncard";
import "bootstrap/dist/css/bootstrap.css";
import { PokeNavBar } from "./components/NavBar/Pokenavbar";
import { useEffect, useState } from "react";
import Favicon from "react-favicon";
import { Footer } from "./components/footer/footer";

function App() {
  const [PokemonNumber, setPokemonNumber] = useState(0);
  const [PokemonName, setPokemonName] = useState("");

  function getPokemonName(data) {
    data = data.toLowerCase();
    setPokemonName(data);
  }
  useEffect(() => {
    console.log("UseEffect de App");
  }, []);

  function reproducePokemons() {
    var pokemons = [];

    if (PokemonNumber != "" && PokemonName != "") {
      return <h1>Reset the values with the button "reset"</h1>;
    }

    if (PokemonNumber == "" && PokemonName == "")
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

    if (PokemonName != "") {
      pokemons.push(<PokemonCard number={PokemonName} />);
    } else {
      for (let i = 1; i <= PokemonNumber; i++) {
        if (PokemonNumber >= 1) {
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
      <Favicon href="./assets/favicon.ico"></Favicon>
      <div className="row">
        <div className="col">
          <PokeNavBar
            getNumberData={getNumberData}
            getPokemonName={getPokemonName}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            id="PokemoncontainerNumber"
            className="container d-flex flex-wrap align-items-center justify-content-center"
          >
            {reproducePokemons()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
