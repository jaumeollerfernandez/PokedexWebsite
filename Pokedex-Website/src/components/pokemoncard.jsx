import { useState } from "react";
import { Pokemon } from "./pokemon";
import { useEffect } from "react";
import "./pokemon.css";

export function PokemonCard(props) {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState(null);
  var [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [BadgeType, setBadgeType] = useState("");
  const [BadgeType2, setBadgeType2] = useState("");
  const [LengthType, setLengthType] = useState(1);
  const [PokemonToShow_Number, setPokemonToShow_Number] = useState(
    props.number
  );
  const colours = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  const fetchData = async () => {
    console.log('realizo fetch')
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + PokemonToShow_Number + "/"
    );
    console.log('fetch terminado')
    console.log(response)
    
    const data = await response.json();
    console.log(data)
    setName(data.name);

    setImageURL(data.sprites.front_default);

    // setType(data.types[0].type.name);

    switch (data.types[0].type.name) {
      case "normal":
        setSelectedColor(colours.normal);
        setBadgeType("./src/assets/badges/normal.png");
        break;
      case "fire":
        setSelectedColor(colours.fire);
        setBadgeType("./src/assets/badges/fire.png");
        break;
      case "water":
        setSelectedColor(colours.water);
        setBadgeType("./src/assets/badges/water.png");
        break;
      case "electric":
        setSelectedColor(colours.electric);
        setBadgeType("./src/assets/badges/electric.png");
        break;
      case "grass":
        setSelectedColor(colours.grass);
        setBadgeType("./src/assets/badges/grass.png");
        break;
      case "ice":
        setSelectedColor(colours.ice);
        setBadgeType("./src/assets/badges/ice.png");
        break;
      case "fighting":
        setSelectedColor(colours.fighting);
        setBadgeType("./src/assets/badges/fighting.png");
        break;
      case "poison":
        setSelectedColor(colours.poison);
        setBadgeType("./src/assets/badges/poison.png");
        break;
      case "ground":
        setSelectedColor(colours.ground);
        setBadgeType("./src/assets/badges/ground.png");
        break;
      case "flying":
        setSelectedColor(colours.flying);
        setBadgeType("./src/assets/badges/flying.png");
        break;
      case "psychic":
        setSelectedColor(colours.psychic);
        setBadgeType("./src/assets/badges/psychic.png");
        break;
      case "bug":
        setSelectedColor(colours.bug);
        setBadgeType("./src/assets/badges/bug.png");
        break;
      case "rock":
        setSelectedColor(colours.rock);
        setBadgeType("./src/assets/badges/rock.png");
        break;
      case "ghost":
        setSelectedColor(colours.ghost);
        setBadgeType("./src/assets/badges/ghost.png");
        break;
      case "dragon":
        setSelectedColor(colours.dragon);
        setBadgeType("./src/assets/badges/dragon.png");
        break;
      case "dark":
        setSelectedColor(colours.dark);
        setBadgeType("./src/assets/badges/dark.png");
        break;
      case "steel":
        setSelectedColor(colours.steel);
        setBadgeType("./src/assets/badges/steel.png");
        break;
      case "fairy":
        setSelectedColor(colours.fairy);
        setBadgeType("./src/assets/badges/fairy.png");
        break;
    }

    if (data.types.length > 1) {
      switch (data.types[1].type.name) {
        case "normal":
          setBadgeType2("./src/assets/badges/normal.png");
          break;
        case "fire":
          setBadgeType2("./src/assets/badges/fire.png");
          break;
        case "water":
          setBadgeType2("./src/assets/badges/water.png");
          break;
        case "electric":
          setBadgeType2("./src/assets/badges/electric.png");
          break;
        case "grass":
          setBadgeType2("./src/assets/badges/grass.png");
          break;
        case "ice":
          setBadgeType2("./src/assets/badges/ice.png");
          break;
        case "fighting":
          setBadgeType2("./src/assets/badges/fighting.png");
          break;
        case "poison":
          setBadgeType2("./src/assets/badges/poison.png");
          break;
        case "ground":
          setBadgeType2("./src/assets/badges/ground.png");
          break;
        case "flying":
          setBadgeType2("./src/assets/badges/flying.png");
          break;
        case "psychic":
          setBadgeType2("./src/assets/badges/psychic.png");
          break;
        case "bug":
          setBadgeType2("./src/assets/badges/bug.png");
          break;
        case "rock":
          setBadgeType2("./src/assets/badges/rock.png");
          break;
        case "ghost":
          setBadgeType2("./src/assets/badges/ghost.png");
          break;
        case "dragon":
          setBadgeType2("./src/assets/badges/dragon.png");
          break;
        case "dark":
          setBadgeType2("./src/assets/badges/dark.png");
          break;
        case "steel":
          setBadgeType2("./src/assets/badges/steel.png");
          break;
        case "fairy":
          setBadgeType2("./src/assets/badges/fairy.png");
          break;
      }
    }

    setIsLoading(false);
    setLengthType(data.types.length);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="m-2 card">
        <img
          className="card-img-top"
          srcSet="./src/assets/loading.gif"
          alt=""
        />
        <h1 className="card-text">Cargando</h1>
      </div>
    );
  }

  if (!isLoading) {
    return (
      <Pokemon
        name={name}
        image={imageURL}
        number={PokemonToShow_Number}
        type={type}
        color={selectedColor}
        BadgeType={BadgeType}
        BadgeType2={BadgeType2}
        lengthType={LengthType}
      />
    );
  }
}

export default PokemonCard;
