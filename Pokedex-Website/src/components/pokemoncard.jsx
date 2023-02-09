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
    console.log("realizo fetch");

    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + PokemonToShow_Number + "/"
    );
    const data = await response.json();
    console.log(data);
    setName(data.name);

    setImageURL(data.sprites.front_default);

    // setType(data.types[0].type.name);

    switch (data.types[0].type.name) {
      case "normal":
        setSelectedColor(colours.normal);
        setBadgeType("./public/assets/badges/normal.png");
        break;
      case "fire":
        setSelectedColor(colours.fire);
        setBadgeType("./public/assets/badges/fire.png");
        break;
      case "water":
        setSelectedColor(colours.water);
        setBadgeType("./public/assets/badges/water.png");
        break;
      case "electric":
        setSelectedColor(colours.electric);
        setBadgeType("./public/assets/badges/electric.png");
        break;
      case "grass":
        setSelectedColor(colours.grass);
        setBadgeType("./public/assets/badges/grass.png");
        break;
      case "ice":
        setSelectedColor(colours.ice);
        setBadgeType("./public/assets/badges/ice.png");
        break;
      case "fighting":
        setSelectedColor(colours.fighting);
        setBadgeType("./public/assets/badges/fight.png");
        break;
      case "poison":
        setSelectedColor(colours.poison);
        setBadgeType("./public/assets/badges/poison.png");
        break;
      case "ground":
        setSelectedColor(colours.ground);
        setBadgeType("./public/assets/badges/ground.png");
        break;
      case "flying":
        setSelectedColor(colours.flying);
        setBadgeType("./public/assets/badges/flying.png");
        break;
      case "psychic":
        setSelectedColor(colours.psychic);
        setBadgeType("./public/assets/badges/psychic.png");
        break;
      case "bug":
        setSelectedColor(colours.bug);
        setBadgeType("./public/assets/badges/bug.png");
        break;
      case "rock":
        setSelectedColor(colours.rock);
        setBadgeType("./public/assets/badges/rock.png");
        break;
      case "ghost":
        setSelectedColor(colours.ghost);
        setBadgeType("./public/assets/badges/ghost.png");
        break;
      case "dragon":
        setSelectedColor(colours.dragon);
        setBadgeType("./public/assets/badges/dragon.png");
        break;
      case "dark":
        setSelectedColor(colours.dark);
        setBadgeType("./public/assets/badges/dark.png");
        break;
      case "steel":
        setSelectedColor(colours.steel);
        setBadgeType("./public/assets/badges/steel.png");
        break;
      case "fairy":
        setSelectedColor(colours.fairy);
        setBadgeType("./public/assets/badges/fairy.png");
        break;
    }

    if (data.types.length > 1) {
      switch (data.types[1].type.name) {
        case "normal":
          setBadgeType2("./public/assets/badges/normal.png");
          break;
        case "fire":
          setBadgeType2("./public/assets/badges/fire.png");
          break;
        case "water":
          setBadgeType2("./public/assets/badges/water.png");
          break;
        case "electric":
          setBadgeType2("./public/assets/badges/electric.png");
          break;
        case "grass":
          setBadgeType2("./public/assets/badges/grass.png");
          break;
        case "ice":
          setBadgeType2("./public/assets/badges/ice.png");
          break;
        case "fighting":
          setBadgeType2("./public/assets/badges/figh.png");
          break;
        case "poison":
          setBadgeType2("./public/assets/badges/poison.png");
          break;
        case "ground":
          setBadgeType2("./public/assets/badges/ground.png");
          break;
        case "flying":
          setBadgeType2("./public/assets/badges/flying.png");
          break;
        case "psychic":
          setBadgeType2("./public/assets/badges/psychic.png");
          break;
        case "bug":
          setBadgeType2("./public/assets/badges/bug.png");
          break;
        case "rock":
          setBadgeType2("./public/assets/badges/rock.png");
          break;
        case "ghost":
          setBadgeType2("./public/assets/badges/ghost.png");
          break;
        case "dragon":
          setBadgeType2("./public/assets/badges/dragon.png");
          break;
        case "dark":
          setBadgeType2("./public/assets/badges/dark.png");
          break;
        case "steel":
          setBadgeType2("./public/assets/badges/steel.png");
          break;
        case "fairy":
          setBadgeType2("./public/assets/badges/fairy.png");
          break;
      }
    }

    setIsLoading(false);
    setLengthType(data.types.length);
  };
  useEffect(() => {
    console.log("useEffect desde pokemonCard");
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="m-2 card bg-dark">
        <img
          className="card-img-top"
          srcSet="./public/assets/loading.gif"
          alt=""
        />
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
