import "./pokemon.css";

export function Pokemon(props) {

    return (
      <div>
        <h1 className="PokemonName">{props.name}</h1>
        <img className="PokemonImage" src={props.image} alt={props.name} />
        <p className="PokemonNumber">{props.number}</p>
      </div>
    );
  }
