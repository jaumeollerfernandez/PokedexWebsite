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
    const PokemonToShow_Number = props.number;
    const colours = {
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A98FF3',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
    };

    const fetchData = async() => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + PokemonToShow_Number + "/")

      const data = await response.json();
      setName(data.name);
      
    setImageURL(data.sprites.front_default);

      // setType(data.types[0].type.name);

      switch(data.types[0].type.name){
        case "normal":
          setSelectedColor(colours.normal);
          break;
        case "fire":
          setSelectedColor(colours.fire);
          break;
        case "water":
          setSelectedColor(colours.water);
          break;
        case "electric":
          setSelectedColor(colours.electric);
          break;
        case "grass":
          setSelectedColor(colours.grass);
          break;
        case "ice":
          setSelectedColor(colours.ice);
          break;
        case "fighting":
          setSelectedColor(colours.fighting);
          break;
        case "poison":
          setSelectedColor(colours.poison);
          break;
        case "ground":
          setSelectedColor(colours.ground);
          break;
        case "flying":
          setSelectedColor(colours.flying);
          break;
        case "psychic":
          setSelectedColor(colours.psychic);
          break;
        case "bug":
          setSelectedColor(colours.bug);
          break;
        case "rock":
          setSelectedColor(colours.rock);
          break;
        case "ghost":
          setSelectedColor(colours.ghost);
          break;
        case "dragon":
          setSelectedColor(colours.dragon);
          break;
        case "dark":
          setSelectedColor(colours.dark);
          break;
        case "steel":
          setSelectedColor(colours.steel);
          break;
        case "fairy":
          setSelectedColor(colours.fairy);
          break;
            }
      setIsLoading(false);
          }
    useEffect(() => {
      fetchData();
    }, []); 
        
    if (isLoading) {
      return (
        <div className="m-2 card">
          <img className="card-img-top" src="./src/assets/loading.gif" alt="" srcset="" />
          <h1 className="card-text">Cargando</h1>
        </div>
      );
    }
    
    if(!isLoading){
      return (
          <Pokemon
            name={name}
            image={imageURL}
            number={PokemonToShow_Number}
            type={type}
            color={selectedColor}
          />
      );
    }

}

export default PokemonCard