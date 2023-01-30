import { useState } from "react";
import "./App.css";
import { Pokemon } from "./pokeComponent/pokemon";
import { useEffect } from "react";

function App() {
  // types/0/type/name
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState(null);
  var [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const colorTypes = {
    fire: "rgb(143, 0, 0)",
    plant: "rgb(131,186,54)",
  };

  var PokemonToShow_Number = "6";

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + PokemonToShow_Number + "/")
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setImageURL(data.sprites.front_default);
        setIsLoading(false);
        setType(data.types[0].type.name);
      });
  }, []);
  
  if (isLoading) {
    return (
      <div>
        <h1>Cargando</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Pokemon
        name={name}
        image={imageURL}
        number={PokemonToShow_Number}
        type={type}
      />
    </div>
  );
}

export default App;
