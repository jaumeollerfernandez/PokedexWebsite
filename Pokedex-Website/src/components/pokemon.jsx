import "./pokemon.css";

export function Pokemon(props) {
  const BrokenImage = (ev) => {
    ev.target.src = "./src/assets/default.png";
  };

  const BrokenBadge = (ev) => {
    ev.target.src = "./src/assets/badges/notfound.png";
  };

  return (
    <div className="m-2 card" style={{ backgroundColor: props.color }}>
      <img
        className="card-img-top"
        onError={BrokenImage}
        src={props.image}
        alt={props.name}
      />
      <div className="card-body text-center">
        <h2 className="PokemonName">{props.name}</h2>
      </div>

      <div className="card-text">
        <div className="col text-center">
          <img
            className="py-2 px-1"
            src={props.BadgeType}
            onError={BrokenBadge}
            width={70}
            alt=""
            srcset=""
          />
          {props.lengthType === 2 ? (
            <img
              className="py-2 px-1"
              src={props.BadgeType2}
              onError={BrokenBadge}
              width={70}
              alt=""
              srcset=""
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
