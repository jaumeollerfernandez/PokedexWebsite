import { useState } from "react";
import { Pokemon } from "./pokemon";
import { useEffect } from "react";
import './pokemon.css'

export function PokemonCard(props){
    const [name, setName] = useState("");
    const [imageURL, setImageURL] = useState(null);
    var [isLoading, setIsLoading] = useState(true);
    const [type, setType] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const colorTypes = {
      fire: "rgb(143, 0, 0)",
      plant: "rgb(131,186,54)",
    };
    const PokemonToShow_Number = props.number;
    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon/" + PokemonToShow_Number + "/")
        .then((response) => response.json())
        .then((data) => {
          setName(data.name);
          setImageURL(data.sprites.front_default);
          setIsLoading(false);
          setType(data.types[0].type.name);
          switch(type){
            case 'fire':
              setSelectedColor('rgb(128,0,0)')
              break;
            case'grass':
              setSelectedColor('rgb(0,128,0)')
              break;
            case 'water':
              setSelectedColor('rgb(0,0,128)')
            default:
              setSelectedColor('rgb(240,240,240)')
          }
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
      <div className="PokemonCard">
        <Pokemon
          name={name}
          image={imageURL}
          number={PokemonToShow_Number}
          type={type}
          color={selectedColor}
        />
      </div>
    );
}

export default PokemonCard