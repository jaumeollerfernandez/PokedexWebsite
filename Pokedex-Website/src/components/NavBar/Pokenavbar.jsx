import "./navbar.css";

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


  return (
    <>
      <nav className="navbar-pokemon">
        <div className="row">
          <div className="col-4 pokemon-logo">
            <div className="row">
              <div className="col-6 px-1">
                <img
                  srcSet="./src/assets/loading.gif"
                  width={50}
                  alt=""
                />
              </div>
              <div className="col-6">
                <div className="fs-1 PokeTitle">PokeData</div>
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
                    returnNumber();
                  }}
                >
                  Put a number
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
                  Search a Pokemon
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
