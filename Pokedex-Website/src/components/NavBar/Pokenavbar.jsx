import "./navbar.css";
import { useEffect } from "react";

export function PokeNavBar(props) {
  function returnNumber() {
    let NumberToSend = document.getElementById("searchPokemonNumber").value;
    console.log(NumberToSend);
    props.getNumberData(NumberToSend);
  }

  function returnName() {
    let NameToSend = document.getElementById("searchPokemonName").value;
    console.log(NameToSend);
    props.getPokemonName(NameToSend);
  }

  function reset() {
    document.getElementById("searchPokemonNumber").value = "";
    document.getElementById("searchPokemonName").value = "";
    props.getNumberData(0);
    props.getPokemonName("");
  }

  function RandomPokemon() {
    let randomNumber = Math.floor(Math.random() * 898);
    props.getPokemonName(randomNumber.toString());
  }

  useEffect(() => {
    console.log("hola");
  }, []);

  return (
    <>
      <nav className="navbar-pokemon">
        <div className="row">
          <div className="col-4 pokemon-logo">
            <div className="row">
              <div className="col-2 navbar-icon justify-content-center px-4">
                <img
                  srcSet="./src/assets/navbar-icon.png"
                  width={60}
                  height={60}
                  alt=""
                />
              </div>
              <div className="col-8 ">
                <div className="fs-1 PokeTitle">PokeData</div>
              </div>
            </div>
          </div>
          <div className="col-4 text-center ">
            <div className="row">
              <div className="col-2 SearchBar">
                <button className="btn" onClick={reset}>
                  reset
                </button>
                <button className="btn btn-dark" onClick={RandomPokemon}>
                  Random
                </button>
              </div>
              <div className="col-10 SearchBar">
                <button
                  type="number"
                  className="btn btn-dark"
                  onClick={() => {
                    returnNumber();
                  }}
                >
                  All (1-898)
                </button>
                <input
                  className="mx-2 input-group-text"
                  type="number"
                  id="searchPokemonNumber"
                />
              </div>
            </div>
          </div>
          <div className="col-4 text-center ">
            <div className="row">
              <div className="col SearchBar">
                <button
                  type="number"
                  className="btn btn-dark"
                  onClick={() => {
                    returnName();
                  }}
                >
                  Search by name
                </button>
                <input
                  className="mx-2 input-group-text"
                  type="text"
                  id="searchPokemonName"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default PokeNavBar;
