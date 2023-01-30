import { useState } from "react";
import "./App.css";
import { Pokemon } from "./pokeComponent/pokemon";
import { useEffect } from "react";



function App() {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState(null);
  var [isLoading, setIsLoading] = useState(true);
  
  var PokemonToShow_Number = "6"

   useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/'+ PokemonToShow_Number +'/')
        .then((response) => response.json())
        .then((data) => {
          setName(data.name);
          setImageURL(data.sprites.front_default)
          setIsLoading(false);
        })}, []);

    if(isLoading){
      return(
        <div>
          <h1>Cargando</h1>
        </div>
      )
    }

     return (<div className="App">
        <Pokemon 
        name = {name}
        image = {imageURL}
        number = {PokemonToShow_Number}
        />
      </div>);
}

export default App;
